import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userWantsLogin: false
    }
  //BIND FUNCTIONS
  }
  this.handleSignUpChange(event){
    this.setState({ userWantsLogin: true });
  }
  //DECLARE FUNCTIONS
    //HANDLE CHANGE, HANDLE SUBMIT

  render(){
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
            <button className='signInButton'>Already a user?</button>
          </div>
      </div>
      )

  }
}

export default SignUp;