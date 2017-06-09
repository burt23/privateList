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
          <div className='loginbarColumnFlexbox'>
            <div className='loginbarColumnFlexItem'>
              <h4>
                Username
              </h4>
            </div>
            <div className='loginbarColumnFlexItem'>
              <input className='loginbarColumnFlexItem' type='text' id='username' placeholder='username' value={this.state.username} onChange={this.handleChangeUsername} />
            </div>
          </div>
        </div>



        <div className='loginFlexItem loginBox'>
          <div className='loginbarColumnFlexbox'>
            <div className='loginbarColumnFlexItem'>
              <h4>
                Password
              </h4>
            </div>
            <div className='loginbarColumnFlexItem'>
              <input type='password' id='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
            </div>
          </div>
       </div>

        <div className='loginFlexItem loginFlexItemButton'>

            <div className='loginbarColumnFlexbox'>
              <div className='loginbarColumnFlexItem'>
                <div className='loginFlexItem loginFlexItemButton'>
                  <input type='submit' value='Login' />
                </div>
              </div>
            </div>
        </div>
        <div className='loginFlexItem loginFlexItemButton'>

            <div className='loginbarColumnFlexbox'>
              <div className='loginbarColumnFlexItem'>
                <div className='loginFlexItem loginFlexItemButton'>
                  <input type='submit' value='Sign Up' onClick={this.props.signup}/>
                </div>
              </div>
            </div>
        </div>

        <div className={ this.props.invalidUserPass ? 'loginFlexItem loginFlexItemLoginError' : 'hidden' }>
          <span>
            <p>
              Not quite right
            </p>
          </span>
        </div>
      </form>
    )
  }
}



export default Login;

        // <div className='loginFlexItem'>

        //   <div className='loginbarColumnFlexbox'>
        //     <div className='loginbarColumnFlexItem'>
        //       <h6>
        //         Username
        //       </h6>
        //     </div>
        //     <div className='loginbarColumnFlexItem'>
        //       <input type='text' id='username' placeholder='username' value={this.state.username} onChange={this.handleChangeUsername} />
        //     </div>
        //   </div>
        // </div>

        // <div className='loginFlexItem'>
        //   <div className='loginbarColumnFlexbox'>
        //     <div className='loginbarColumnFlexItem'>
        //       <h6>
        //         Password
        //       </h6>
        //     </div>
        //     <div className='loginbarColumnFlexItem'>
        //       <input type='password' id='password' placeholder='password' value={this.state.password} onChange={this.handleChangePassword}/>
        //     </div>
        //   </div>
        // </div>


