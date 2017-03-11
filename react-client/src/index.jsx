import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {name: 'marvin gaye',
          description: 'sexual healing'},

        {name: 'will withers',
         description: 'grandmas hands'},

        {name: 'ottis redding',
          description: 'a change is gonna come'},

        {name: 'curtis mayfield',
         description: 'pusherman'}
      ],
    };
    this.search = this.search.bind(this);
      console.log('inside index', this);

  }

  componentDidMount() {
    //invoke get()
  }
  get() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  search (term) {
    console.log('term from search', term);
    $.ajax({
      url: 'http://localhost:3000/songs/users',
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
      <h1 id='mainTitle'>SoundShuffle</h1>
      <Search search = {this.search} handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List songs={this.state.songs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));