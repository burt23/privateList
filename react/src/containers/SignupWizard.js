import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';

class SignupWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      connectionType: ''
    };
    // bind functions
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext(connectionType){
    console.log('inside handleNext', connectionType)

    if (connectionType === 'bt' || connectionType === 'nfc'){
      this.setState({
        connectionType
      })
    }
    const stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev(){
    console.log('inside handlePrev')
    const stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };


  handleComplete(){
    console.log('complete wiz');
    this.props.completeWhiz();
  }

  getStepContent(stepIndex) {
    const stepOne = () => (<h2>lots of great content</h2>);
    switch (stepIndex) {
      case 0:
        return <StepOne
                  connectionType={this.state.connectionType}
                 handleNext={this.handleNext}
                 handlePrev={this.handlePrev}
               />;
      case 1:
        return  <StepTwo
                  connectionType={this.state.connectionType}
                  handleNext={this.handleNext}
                  handlePrev={this.handlePrev}
                  user_id={this.props.user_id}
                  setDevice={this.props.setDevice}
                />;
      case 2:
        return <StepThree
                connectionType={this.state.connectionType}
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
                device_id={this.props.device_id}
                user_id={this.props.user_id}
                setDevice={this.props.setDevice}
                device_id={this.props.device_id}
                device_name={this.props.device_name}
              />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

   render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Connection Type</StepLabel>
          </Step>
          <Step>
            <StepLabel>Pair Gateway</StepLabel>
          </Step>
          <Step>
            <StepLabel>Manage Account</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <span>{this.handleComplete()}</span>
           ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SignupWizard;
