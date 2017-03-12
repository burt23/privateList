import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'wiki leaks',
          description: 'send leaked docs to j assange'},

        {name: 'cia letters',
         description: 'destroy evidence of breach'},

        {name: 'burner phone',
          description: 'buy craigslist phone for secret activities'},

        {name: '911 folsom',
         description: 'ask for cindy, passphrase: today is an awefully nice day to ride a bike, dont you agree?'}
      ],
      isLoggedIn: false,
      user_id: null

    };
    this.search = this.search.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.get = this.get.bind(this);
    console.log('inside index', this);
  }

  componentDidMount() {
  // this.get();
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
        console.log('successful get dataDATA', data);
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
    console.log('username:', username);
    console.log('password:', password);
    $.ajax({
      url: 'http://localhost:3000/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        console.log('addedUser', data);
        console.log('addedUser', data.user_added);
        console.log('context', context);
        context.setState({
          isLoggedIn: true,
          user_id: data.user_added
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
    console.log('username:', username);
    console.log('password:', password);
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        // var el = JSON.parse(data);
        // console.log('el:', el);
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id
        });
        context.get(context.state.user_id);
      },
      error: function(error, data) {
        console.log('error after loggggin in dduuuude', data);
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
        console.log('successful postITEMSSEARCH TEXT', data);
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
    return (<div>
      <h1 id='mainTitle'>Private List</h1>
      <Search search = {this.search} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List items={this.state.items}/>
    </div>)
    } else {
      return (
      <div>
        <Login signup={this.signup} login={this.login} isLoggedIn={this.state.isLoggedIn}/>
      </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));