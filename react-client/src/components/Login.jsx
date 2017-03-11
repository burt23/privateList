import React from 'react';
import ReactDOM from 'react-dom';

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


  render () {
    if(!this.userWantsSignUp){
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
            <h2>Are you looking to sign up?</h2>
          </div>
        </div>
      )
    }
  }
}


export default Login;