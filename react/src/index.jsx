import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './containers/Header.jsx';
import Homepage from './containers/Homepage';
import Footer from './containers/Footer';
import Portal from './containers/Portal';
import TokenModal from './containers/TokenModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      lists: ['one', 'two', 'three'],
      isLoggedIn: false,
      user_id: null,
      showToken: false,
      accessToken: '',
      requestedToken: false,
      userCanEdit: false,
      invalidUserPass: false,
      senderEmail: '',
      emailError: false
    };

    this.search = this.search.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.get = this.get.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.delete = this.delete.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.generateAccessToken = this.generateAccessToken.bind(this);
    this.handleSenderEmail = this.handleSenderEmail.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleModalExit = this.handleModalExit.bind(this);
    this.addList = this.addList.bind(this);
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      showToken: false
    });
  }

  handleModalExit() {
    this.setState({
      showToken: false
    });
  }

  handleEmailSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.emailToken(this.state.senderEmail, this.state.accessToken);
  }

  emailToken(email, token) {
    const context = this;
    $.ajax({
      url: '/email',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email,
        token
      }),
      success() {
        context.setState({
          tokenMailed: true,
          showToken: false
        });
      },
      error() {
        context.setState({
          emailError: true
        });
      }
    });
  }

  handleSenderEmail(event) {
    this.setState({
      senderEmail: event.target.value
    });
  }

  handleTokenChange() {
    if (!this.state.requestedToken) {
      this.setState({
        requestedToken: true
      });
      this.generateAccessToken(this.state.accessToken);
    }
  }

  generateAccessToken() {
    const context = this;

    $.ajax({
      url: '/token/new',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        user_id: this.state.user_id,
        token: this.state.accessToken
      }),
      success(data) {
        context.setState({
          accessToken: data,
          showToken: true
        });
      },
      error(error) {
        console.log('err', error);
      }
    });
  }

  checkToken(accessToken) {
    const context = this;
    $.ajax({
      url: '/token',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        accessToken
      }),
      success(data) {
        if (data.length > 0) {
          context.setState({
            isLoggedIn: true,
            userCanEdit: false,
            items: data
          });
        }
      },
      error(error) {
        console.log('err', error);
      }
    });
  }

  addList(list) {
    const context = this;
    $.ajax({
      url: '/lists/add',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        list,
        user_id: this.state.user_id
      }),
      success(data) {
        console.log('successful ajax in add list', data);
        if (data.length > 0) {
          context.setState({
            lists: data.lists
          });
        }
      },
      error(err) {
        console.log('addList error', err);
      }
    });
  }

  delete(message_id) {
    const context = this;
    $.ajax({
      url: '/items/remove',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        message_id
      }),
      success() {
        context.get();
      },
      error(err) {
        console.log('error in deletion', err);
      }
    });
  }

  get() {
    const context = this;
    $.ajax({
      url: '/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        id: this.state.user_id
      }),
      success: (data) => {
        context.setState({
          items: data.reverse()
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  signup(username, password) {
    const context = this;
    $.ajax({
      url: '/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username,
        password
      }),
      success(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_added
        });
        context.get(context.state.user_id);
      },
      error(error) {
        console.log(error);
      }
    });
  }

  login(username, password) {
    const context = this;
    $.ajax({
      url: '/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username,
        password
      }),
      success(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id
        });
        context.get(context.state.user_id);
      },
      error() {
        context.setState({
          invalidUserPass: true
        });
      }
    });
  }

  search(term) {
    const context = this;
    $.ajax({
      url: '/items/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        term,
        id: this.state.user_id
      }),
      success(data) {
        context.setState({
          items: data.reverse()
        });
      },
      error(error) {
        console.log('error', error);
      }
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div className="appContainer">
          { this.state.showToken &&
          <TokenModal
            handleEmailSubmit={this.handleEmailSubmit}
            handleSenderEmail={this.handleSenderEmail}
            accessToken={this.state.accessToken}
            handleModalExit={this.handleModalExit}
          />}
          <Header
            invalidUserPass={this.state.invalidUserPass}
            login={this.login}
            isLoggedIn={this.state.isLoggedIn}
            handleLogout={this.handleLogout}
          />
          <Portal
            handleTokenChange={this.handleTokenChange}
            handleEmailSubmit={this.handleEmailSubmit}
            handleSenderEmail={this.handleSenderEmail}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            items={this.state.items}
            delete={this.delete}
            search={this.search}
            lists={this.state.lists}
            addList={this.addList}
          />
          <Footer
            handleTokenChange={this.handleTokenChange}
            user_id={this.state.user_id}
          />
        </div>
      );
    }

    return (
      <div className="appContainer">
        <Header
          invalidUserPass={this.state.invalidUserPass}
          login={this.login}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Homepage
          checkToken={this.checkToken}
          signup={this.signup}
        />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
