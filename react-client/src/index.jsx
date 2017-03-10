import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {name: 'marvin gaye',
          description: 'sexual healing'},

        {name: 'will withers',
         description: 'grandmas hands'},

        {name: 'curtis mayfield',
         description: 'pusherman'}
      ],
    }
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

  render () {
    return (<div>
      <h1 id='mainTitle'>SoundShuffle</h1>
      <List songs={this.state.songs}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));