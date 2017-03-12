import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp.jsx';
import LearnMore from './LearnMore.jsx';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      userWantsSignUp: false,
      userWantsLearnMore: false,
      userWantsLogin: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.handleLearnMoreChange = this.handleLearnMoreChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
  }

  handleSubmit(event) {
    this.props.login(this.state.username, this.state.password);
    event.preventDefault();
    this.setState({ username: '' });
    this.setState({ password: '' });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSignUpChange(event) {
    console.log(event.target);
    this.setState({ userWantsSignUp: true });
    this.setState({ userWantsLogin: false });
    this.setState({ userWantsLearnMore: false });
  }

  handleLearnMoreChange(event) {
    console.log('inside learn more');
    this.setState({ userWantsSignUp: false });
    this.setState({ userWantsLogin: false });
    this.setState({ userWantsLearnMore: true });
  }

  handleLoginChange(event){
    console.log('inside login change');
    this.setState({ userWantsSignUp: false });
    this.setState({ userWantsLearnMore: false });
    this.setState({ userWantsLogin: true });
  }


  render () {
    if(this.state.userWantsLogin){
      return (
        <div className = 'container'>
          <div className = 'formWrapper'>
            <h1 id='mainTitle'>Private List</h1>
            <h3> Login </h3>
            <form onSubmit={this.handleSubmit}>
              <div className='loginBox'>
                <input type='text' id='username' placeholder='username' value={this.state.username} onChange={this.handleChangeUsername} />
              </div>
              <div className='loginBox'>
                <input type='password' id='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
              </div>
              <div className='submitButton'>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
          <div className='signupWrapper'>
            <button className='signInButton' onClick={this.handleSignUpChange} >Are you looking to sign up?</button>
          </div>
          <div className='learnMoreWrapper'>
            <button className='signInButton learnMoreButton' onClick={this.handleLearnMoreChange} >Want to learn more?</button>
          </div>
        </div>
      )
    } else if (this.state.userWantsSignUp) {
      return(
        <div>
          <SignUp signup={this.props.signup} userWantsLogin = {this.state.userWantsLogin}  handleLoginChange ={this.handleLoginChange}/>
        </div>
        )
    } else if (this.state.userWantsLearnMore) {
      return(
        <div>
          <LearnMore  userWantsLogin = {this.state.userWantsLogin} userWantsSignUp = {this.state.userWantsSignUp} handleLoginChange = {this.handleLoginChange} handleSignUpChange = {this.handleSignUpChange} />
        </div>
        )
    }
  }
}


export default Login;