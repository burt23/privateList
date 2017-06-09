import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';
import Header from './containers/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Homepage from './containers/Homepage.js';
import Footer from './containers/Footer.js';
import Portal from './containers/Portal.js';
import TokenModal from './containers/TokenModal.js';
import SignupModal from './containers/SignupModal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      lists: ['one', 'two', 'three'],
      isLoggedIn: true,
      user_id: null,
      showToken: false,
      accessToken: '',
      requestedToken: false,
      userCanEdit: false,
      invalidUserPass: false,
      senderEmail: '',
      emailError: false,
      wantsSignupModal: false,
      username: ''
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
    this.wantsSignupModal = this.wantsSignupModal.bind(this);
  }

  componentDidMount() {
  }

  wantsSignupModal(event){
    console.log('clicked wantsSignupModal');
    this.setState({
      wantsSignupModal: !this.state.wantsSignupModal
    })
  }

  handleLogout(event){
    this.setState({
      isLoggedIn: false,
      showToken: false,
      wantsSignupModal: false,
      showToken: false,
      requestedToken: false,
      invalidUserPass: false
    })
  }

  handleModalExit(event){
    console.log('almost there', event)
    this.setState({
      showToken: false
    })
  }

  handleEmailSubmit(event){
    console.log('inside email submit')
    event.preventDefault();

    event.stopPropagation();
    this.emailToken(this.state.senderEmail, this.state.accessToken);
  }

  emailToken(email, token){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/email',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: email,
        token: token
      }),
      success: function(data){
        console.log('mailed token', data);
        context.setState({
          tokenMailed: true,
          showToken: false
        });
      },
      error: function(error){
        console.log(error);
        context.setState({
          emailError: true
        })
      }
    })
  }

  handleSenderEmail(event){
    this.setState({
      senderEmail: event.target.value
    });
  }

  handleTokenChange(event) {
    console.log('inside token change');
    if(!this.state.requestedToken){
      this.setState({
        requestedToken: true
      });
      this.generateAccessToken(this.state.accessToken);
    }
  }

  generateAccessToken(){
    var context = this;

    $.ajax({
      url: 'http://localhost:3000/token/new',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        user_id: this.state.user_id,
        token: this.state.accessToken
      }),
      success: function(data){
        // console.log('data from access token', data);
        context.setState({
          accessToken: data,
          showToken: true
        })
      },
      error: function(error){
        console.log('err', error);
      }
    })
  }

  checkToken(accessToken){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/token',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        accessToken: accessToken
      }),
      success: function(data){
          if(data.length>0){
          context.setState({
            isLoggedIn: true,
            userCanEdit: false,
            items: data
          })
        }
      },
      error: function(error){
        console.log('err', error);
      }
    })
  }

  addList(list){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/lists/add',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        list: list,
        user_id: this.state.user_id
      }),
      success: function(data){
        console.log('successful ajax in add list', data);
        if(data.length>0){
          context.setState({
            lists: data.lists
          })
        }
      },
      error: function(err){
        console.log('addList error', err);
      }
    })
  }

  delete( message_id ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/items/remove',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        message_id: message_id
      }),
      success: function(data) {
        context.get();
      },
      error: (function(err) {
        console.log('error in deletion', err); })
    })
  }

  get() {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/users',
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

  signup( username, password ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id,
          username
        });
      context.get(context.state.user_id);
      },
      error: function(error){
        console.log(error);
      }
    })
  }

  login( username, password ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id,
          username
        });
        context.get(context.state.user_id);
      },
      error: function(error, data) {
        context.setState({
          invalidUserPass: true
        })
      }
    })
  }

  search (term) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/items/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        term: term,
        id: this.state.user_id
      }),
      success: function(data) {
        context.setState({
          items: data.reverse()
        });
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }

  render () {
    if(this.state.isLoggedIn){
    return (
      <MuiThemeProvider>
        <div>
          { this.state.showToken &&
          <TokenModal
            handleEmailSubmit={this.handleEmailSubmit}
            handleSenderEmail={this.handleSenderEmail}
            accessToken={this.state.accessToken}
            handleModalExit={this.handleModalExit}
          />
          }
          <Portal
            username={this.username}
            user_id={this.user_id}
            handleLogout={this.handleLogout}
            handleTokenChange={this.handleTokenChange}
            handleEmailSubmit={this.handleEmailSubmit}
            handleSenderEmail={this.handleSenderEmail}
            handleEmailSubmit={this.handleEmailSubmit}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            items={this.state.items}
            delete={this.delete}
            search={this.search}
            lists={this.state.lists}
            addList={this.addList}
          />
        </div>
      </MuiThemeProvider>
      )
    } else if (this.state.wantsSignupModal) {
      return (
       <MuiThemeProvider>
        <div>
          <SignupModal
            handleModalExit={this.handleModalExit}
            signup={this.signup}
          />
          <h2>hello</h2>
        </div>
      </MuiThemeProvider>)
    } else {
      return (
      <MuiThemeProvider>
        <div className='welcomeContainer'>
          <Header
            invalidUserPass={this.state.invalidUserPass}
            login={this.login}
            isLoggedIn={this.state.isLoggedIn}
            wantsSignupModal={this.wantsSignupModal}
            signup={this.signup}
          />
          <Homepage
            checkToken={this.checkToken}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));