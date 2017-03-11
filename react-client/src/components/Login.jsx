import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp.jsx';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      userWantsSignUp: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    console.log('inside login', this);
  }

  handleSubmit(event) {
    console.log('this inside handle submit', this);
    this.props.login(this.state.username, this.state.password);
    event.preventDefault();
    this.setState({ username: '' });
    this.setState({ password: '' });
  }

  handleChangeUsername(event) {
    console.log('changehandlers', this);
    console.log('changehandlers', event.target.value);
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    console.log('changehandlers', this);
    console.log('changehandlers', event.target.value);
    this.setState({ password: event.target.value });
  }

  handleSignUpChange(event) {
    console.log(event.target);
    this.setState({ userWantsSignUp: !this.state.userWantsSignUp });

  }


  render () {
    if(!this.state.userWantsSignUp){
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
                <input id='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
              </div>
              <div className='submitButton'>
                <input type='submit' value='Submit' />
              </div>
            </form>
          </div>
          <div className='signupWrapper'>
            <button className='signInButton' onClick={this.handleSignUpChange} >Are you looking to sign up?</button>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <SignUp />
        </div>
        )
    }
  }
}


export default Login;