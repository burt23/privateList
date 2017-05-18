import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      invalidUserPassCombo: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
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
    return (
      <form className='loginFlexbox' onSubmit={this.handleSubmit}>
        <div className='loginFlexItem loginBox'>
          <input type='text' id='username' placeholder='username' value={this.state.username} onChange={this.handleChangeUsername} />
        </div>
        <div className='loginFlexItem loginBox'>
          <input type='password' id='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
        </div>
        <div className='loginFlexItem submitButton'>
          <input type='submit' value='Login' />
        </div>
        <div className={ this.props.invalidUserPass ? 'loginFlexItem loginFlexItemLoginError' : 'hidden' }>
          <span><p>Not quite right</p></span>
        </div>
      </form>
    )
  }
}



export default Login;