import React from 'react';
import Login from './Login.jsx';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      verifier: '',
      userWantsLogin: false
    }
  //BIND FUNCTIONS
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeVerifier = this.handleChangeVerifier.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    console.log('handlin submit bbabby');
    event.preventDefault();
  }

  handleSignUpChange(event){
    console.log('inside sign up');
    this.setState({ userWantsLogin: !this.state.userWantsLogin });
  }

  handleChangeUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleChangeVerifier(event){
    this.setState({
      verifier: event.target.value
    })
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
            <form onSubmit={this.handleSubmit}>
              <div className='signupBoxUser'>
                <input type='text' id='username' placeholder='username' onChange={this.handleChangeUsername} value={this.state.username}/>
              </div>
              <div className='signupBoxPass'>
                <input type='text' id='password' placeholder='password' onChange={this.handleChangePassword} value={this.state.password} />
              </div>
              <div className='signupBoxPass'>
                <input type='text' id='passwordVerify' placeholder='password' onChange={this.handleChangeVerifier} value={this.state.verifier}/>
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