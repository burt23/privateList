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

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render () {
    if(this.state.userWantsLogin){
      return (
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
      )
    }
  }
}


export default Login;