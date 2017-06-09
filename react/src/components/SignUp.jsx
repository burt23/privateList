import React from 'react';
import Login from './Login.jsx';

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
    // this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeVerifier = this.handleChangeVerifier.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    console.log('handlin submit bbabby');
    if(this.state.username.length > 0 && this.state.password.length > 0 && this.state.password === this.state.verifier){
      console.log('goodpassword duude');
      console.log('username', this.state.username);
      console.log('password', this.state.password);
      this.props.signup(this.state.username, this.state.password);
    } else {
      this.setState({
        invalidCombo: true
      })
    }
    event.preventDefault();
  }

  // handleSignUpChange(event){
  //   console.log('inside sign up');
  //   this.setState({ userWantsLogin: !this.state.userWantsLogin });
  // }

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
        <div className = 'tokenModalWrapper'>

          <h3> Sign Up </h3>

            <form
              className='modalForm'
              onClick={this.props.handleFormClick}
              onSubmit={this.handleSubmit}>

              <div className='tokenModalFlexItem'>
                <div className='signupBoxUser'>
                  <input type='text' id='username' placeholder='username' onChange={this.handleChangeUsername} value={this.state.username}/>
                </div>
              </div>
              <div className='tokenModalFlexItem'>
                <div className='signupBoxPass'>
                  <input type='password' id='password' placeholder='password' onChange={this.handleChangePassword} value={this.state.password} />
                </div>
              </div>
              <div className='tokenModalFlexItem'>
                <div className='signupBoxPass'>
                  <input type='password' id='passwordVerify' placeholder='verify' onChange={this.handleChangeVerifier} value={this.state.verifier}/>
                </div>
              </div>
              <div className='tokenModalFlexItem'>
                <div className='submitButton'>
                  <input type='submit' value='Submit' />
                </div>
              </div>
              <div className='tokenModalFlexItem'>
                <span className={ this.state.invalidCombo ? 'invalidCombo' : 'hidden' }>
                  <p>Invalid Combo</p>
                  <p>Password's must match</p>
                </span>
              </div>
            </form>
        </div>

          )
    }
}

export default SignUp;