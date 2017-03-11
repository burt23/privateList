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
    this.get = this.get.bind(this);
      console.log('inside index', this);

  }

  componentDidMount() {
    //invoke get()
    // if(user_id){
    //   this.get(user_id);
    // }
    this.get();
  }
  get() {
    $.ajax({
      url: 'http://localhost:3000/users',
      success: (data) => {
        console.log('successful get dataDATA', data);
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
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
        console.log('successful post on loginDATA FROM SERVER',typeof data);
        console.log('successful post on loginDATA FROM SERVER', data);
        console.log('successful post on CONTEXTSUCCESS', context);
        context.setState({
          isLoggedIn: true
        });
      },
      error: function(error, data) {
        console.log('error after loggggin in dduuuude', error);
        console.log('error after loggggin in dduuuude', data);
      }
    })
  }

  search (term) {
    var context = this;
    console.log('term from search', term);
    $.ajax({
      url: 'http://localhost:3000/items/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({term: term}),
      success: function(data) {
        console.log('successful postITEMSSEARCH TEXT', data);
        context.setState({
          items: data
        });
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }

  render () {
    console.log('logged in ', this.state.isLoggedIn);
    if(this.state.isLoggedIn){
    return (<div>
      <h1 id='mainTitle'>Private List</h1>
      <Search search = {this.search} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List items={this.state.items}/>
    </div>)
    } else {
      return (
      <div>
        <Login login={this.login} isLoggedIn={this.state.isLoggedIn}/>
      </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));