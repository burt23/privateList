import React from 'react';
import Login from './Login.jsx';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userWantsLogin: false
    }
  //BIND FUNCTIONS
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
  }
  handleSignUpChange(event){
    console.log('inside sign up');
    this.setState({ userWantsLogin: !this.state.userWantsLogin });
  }
  //DECLARE FUNCTIONS
    //HANDLE CHANGE, HANDLE SUBMIT

  render(){
    if(!this.state.userWantsLogin){

    return(
      <div className = 'container'>
        <div className = 'formWrapper'>
          <h1 id='mainTitle'>Private List</h1>
          <h3> Sign Up </h3>
            <form>
              <div className='signupBoxUser'>
                <input type='text' id='username' placeholder='username' />
              </div>
              <div className='signupBoxPass'>
                <input type='text' id='password' placeholder='password' />
              </div>
              <div className='signupBoxPass'>
                <input type='text' id='passwordVerify' placeholder='password' />
              </div>
              <div className='submitButton'>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
          <div className='signupWrapper'>
            <button className='signInButton' onClick={this.handleSignUpChange}>Already a user?</button>
          </div>
      </div>
      )
    } else {
      return (
        <div>
          <Login />
        </div>
        )
    }
  }
}

export default SignUp;