import React from 'react';

class LearnMore extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className='container learnMore'>
        <h1 id='mainTitle'>Private List</h1>
        <h3>About</h3>
        <div id='learnMoreTextWrapper'>
        <h3> Need to share secure way to share idea's with others? Private List is an easy way to create a list and share it freely quickly and securely. Generate secret keys to share your list with only people you choose, free and easy</h3>
        </div>
        <div className='signupWrapper'>
          <button className='signInButton' onClick={this.props.handleSignUpChange} >Ready to sign up?</button>
        </div>
        <div className='loginWrapper'>
          <button className='signInButton loginButton' onClick={this.props.handleLoginChange} >Already a User?</button>
        </div>

      </div>
      )
  }
}

export default LearnMore;