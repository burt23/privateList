import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // bind
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log('inside handle click', event.target.value);

    if(event.target.value === 'finish') {
      this.props.handleNext()
    } else if (event.target.value === 'back') {
      this.props.handlePrev()
    }
  }


  render() {
    return(
    <div>
    <h3 id="wizardHeadliner">Schedule Events</h3>
      <p>
         Here's where things get fun, now we can make these tools do work for use to save precious time, energy, and to make our lives better.  Set devices to turn on at set intervals throughout the day, or based off of custom triggers based on which device enters that particular region of the network.
      </p>
      <br />
      <RaisedButton
        label={'Back'}
        primary={true}
        onClick={this.handleClick}
        value='back'
      />
      <RaisedButton
        label={'Finish'}
        primary={true}
        onClick={this.handleClick}
        value='finish'
      />
    </div>
    )
  }
}

export default StepThree;