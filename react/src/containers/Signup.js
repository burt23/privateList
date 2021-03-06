import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      verifier: '',
      validUsername: false,
      validPassword: false,
      invalidCombo: false
    }
    //BIND FUNCTIONS
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeVerifier = this.handleChangeVerifier.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    // Check for valid input before sending to server
    // TODO: escape input
    if(this.state.username.length > 0 && this.state.password.length > 0 && this.state.password === this.state.verifier){
      this.props.signup(this.state.username, this.state.password);
    } else {
      // if false trigger conditional render
      this.setState({
        invalidCombo: true
      })
    }
    event.preventDefault();
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

  render(){
    return(
     <div className = 'formWrapper'>
      <h4> Sign Up </h4>
      <hr/>
        <form onSubmit={this.handleSubmit}>
          <div className='signupBoxUser'>
            <input type='text' id='username' placeholder='username' onChange={this.handleChangeUsername} value={this.state.username}/>
          </div>
          <div className='signupBoxPass'>
            <input type='password' id='password' placeholder='password' onChange={this.handleChangePassword} value={this.state.password} />
          </div>
          <div className='signupBoxPass'>
            <input type='password' id='passwordVerify' placeholder='password' onChange={this.handleChangeVerifier} value={this.state.verifier}/>
          </div>
          <div className='signupBoxPass submitButton'>
            <input type='submit' value='Create Account' />
          </div>
          <span className={ this.state.invalidCombo ? 'invalidCombo' : 'hidden' }>
            <p>Invalid Combo</p>
            <p>Password's must match</p>
          </span>
        </form>
        <hr />
      <p> Forever and Always <br/><strong>Free</strong></p>
      </div>
    )
  }
}

export default SignUp;