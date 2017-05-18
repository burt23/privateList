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
      accessToken: '',
      userWantsSignUp: false,
      userWantsLearnMore: false,
      userWantsLogin: true,
      invalidUserPassCombo: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.handleLearnMoreChange = this.handleLearnMoreChange.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleTokenSubmit = this.handleTokenSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.login(this.state.username, this.state.password);
    event.preventDefault();
    this.setState({ username: '' });
    this.setState({ password: '' });
  }

  handleTokenSubmit(event) {
    console.log('inside token submit');
    console.log('inside token submit', this.state.accessToken);

    this.props.token(this.state.accessToken);
    event.preventDefault();
    this.setState({ accessToken: '' });
  }

  handleTokenChange(event) {
    this.setState({ accessToken: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSignUpChange(event) {
    this.setState({
      userWantsSignUp: true,
      userWantsLogin: false,
      userWantsLearnMore: false
    });
    // console.log('invalidUserPass', this.props.invalidUserPass);
    // this.props.invalidUserPass = false;

  }

  handleLearnMoreChange(event) {
    this.setState({
      userWantsSignUp: false,
      userWantsLogin: false,
      userWantsLearnMore: true
    });
    // this.props.invalidUserPass = false;

  }

  handleLoginChange(event){
    this.setState({
      userWantsSignUp: false,
      userWantsLearnMore: false,
      userWantsLogin: true
    });
  }


  render () {
    if(this.state.userWantsLogin){
      return (
        <div className = 'container'>
          <div className = 'formWrapper'>
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
              <div className={ this.props.invalidUserPass ? '' : 'hidden' }>
                <span><p>Not quite right</p></span>
              </div>
            </form>
          </div>
          <div className='signupWrapper'>
            <button className='signInButton' onClick={this.handleSignUpChange} >Are you looking to sign up?</button>
          </div>
          <div className='learnMoreWrapper'>
            <button className='signInButton learnMoreButton' onClick={this.handleLearnMoreChange} >Want to learn more?</button>
          </div>
          <div className='accessTokenWrapper'>
            <form onSubmit={this.handleTokenSubmit} className='tokenForm'>
              <input className='accessTokenField' type='text' value={this.state.accessToken} onChange={this.handleTokenChange} placeholder='Access Token'>
              </input>
            </form>
          </div>
        </div>
      )
    } else if (this.state.userWantsSignUp) {
      return(
        <div>
          <SignUp signup={this.props.signup} userWantsLogin = {this.state.userWantsLogin}  handleLoginChange = {this.handleLoginChange}/>
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