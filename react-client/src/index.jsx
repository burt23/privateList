import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

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
      url: 'http://localhost:3000/',
      success: (data) => {
        // this.setState({
        //   items: data
        // })
        console.log('successful get data', data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search (term) {
    console.log('term from search', term);
    $.ajax({
      url: 'http://localhost:3000/items/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({term: term}),
      success: function(error, data) {
        console.log('successful post');
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }

  render () {
    return (<div>
      <h1 id='mainTitle'>Private List</h1>
      <Search search = {this.search} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));