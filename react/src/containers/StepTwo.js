import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successfullyPaired: false
    }
    // bind
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log('inside handle click', event.target.value);

    if(event.target.value === 'next') {


      this.setState({
        successfullyPaired: true
      })
    } else if (event.target.value === 'back') {
      this.props.handlePrev()
    }
  }

  render() {
    if (this.props.connectionType === 'bt') {
    return(
      <div>
        <h3 id="wizardHeadliner">Select a Device to Pair</h3>

        <h4> This device supports: </h4> <span>  Bluetooth 4.0</span>
        <br />
        <RaisedButton
          label={'Back'}
          primary={true}
          onClick={this.handleClick}
          value='back'
        />
        <RaisedButton
          label={'Next'}
          primary={true}
          onClick={this.handleClick}
          value='next'
        />

      </div>
      )
    } else if (this.props.connectionType === 'nfc') {
      return (
        <div>
          <h3 id="wizardHeadliner">Ready to Pair</h3>

          <h4> Device NFC Support: 2.0.1: </h4>
          <iframe src="https://giphy.com/embed/8bvq0VLRbnkWc" width="480" height="300" frameBorder="0"></iframe>
          <br />
          <RaisedButton
            label={'Back'}
            primary={true}
            onClick={this.handleClick}
            value='back'
          />
          <RaisedButton
            label={'Next'}
            primary={true}
            onClick={this.handleClick}
            value='next'
          />
        </div>
      )
    } else return (<h1> oooooops! </h1>)
  }
}

export default StepTwo;