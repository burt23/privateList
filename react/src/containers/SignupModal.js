import React from 'react';
import Signup from '../containers/Signup.js'

class TokenModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedOutside: false,
      formCount: 0,
      outCount: 0
    };
    //bind functions
    this.handleModalExit = this.handleModalExit.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
  }

  handleModalExit(event){
    if(this.state.outCount-this.state.formCount>0){
      this.props.handleModalExit();
    }
  }

  handleFormClick(event){
    this.setState({
      formCount: this.state.formCount+1
    }, this.handleModalExit);
  }

  handleOutClick(event){
      this.setState({
        outCount: this.state.outCount+1,
        clickOutside: true
      }, this.handleModalExit);
    }

  render(){
    return(
      <div className='tokenModalWrapper'>
        <div className='tokenModalFlexbox' onClick={this.handleOutClick}>

        <Signup
          className='modalForm'
          handleFormClick={this.handleFormClick}
          signup={this.props.signup}
          />
        </div>
      </div>
    )
  }
}

export default TokenModal;
