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

    };
    this.search = this.search.bind(this);
    this.get = this.get.bind(this);
      console.log('inside index', this);

  }

  componentDidMount() {
    //invoke get()
    this.get();
  }
  get() {
    $.ajax({
      url: 'http://localhost:3000/users',
      success: (data) => {
        this.setState({
          items: data
        });
        console.log('successful get data', data);
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
      success: function(error, data) {
        console.log('successful post');
        context.setState({
          items: data
        });
      },
      error: function(error) {
        console.log('error', error);
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
      success: function(error, data) {
        console.log('successful post');
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
    if(this.props.isLoggedIn){
    return (<div>
      <h1 id='mainTitle'>Private List</h1>
      <Search search = {this.search} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List items={this.state.items}/>
    </div>)
    } else {
      return (
      <div>
        <Login />
      </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));