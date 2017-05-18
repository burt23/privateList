import React from 'react';
import Login from '../containers/loginbar.js'

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
          <form className='modalForm' onClick={this.handleFormClick} onSubmit={this.props.handleEmailSubmit}>
            <div className='tokenModalFlexItem'>
              <h4>Remember!</h4><hr />
              <p>Anyone with this code will have access to your entire repo. </p>
              <p>Feel like <strong>sharing</strong> this list? </p>
              <p>Enter an <strong>email</strong> below and hit send!</p>
              <input type='text' value={this.props.accessToken} className='showToken' />
            </div>
            <div className='tokenModalFlexItem'>
              <input type='text' className='tokenModalFlexItem' value={this.props.senderEmail} onChange={this.props.handleSenderEmail} placeholder='Email Token' />
            </div>
            <div>
              <button className='tokenModalFlexItem' onClick={this.props.handleEmailSubmit}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TokenModal;
