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
  }

  componentDidMount() {
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
  search () {
    $.ajax({
      url: 'http://127.0.0.1',
      type: 'POST',


    })
  }

  render () {
    return (<div>
      <h1 id='mainTitle'>SoundShuffle</h1>
      <Search handleChange = {this.props.handleChange} handleSubmit = {this.props.handleSubmit}/>
      <List songs={this.state.songs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));