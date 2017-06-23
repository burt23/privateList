import React from 'react';
import Login from '../containers/loginbar.js'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    //bind functions
  }
  render(){
    return(
      <div id='welcomeHeader'>
        <div className='headerFlexbox'>


          <div className='headerFlexItem headFlexItemCenter'>
            <h1>
              <a href="#">Node 360</a>
            </h1>
          </div>

          <div className='headerFlexItem'>
            { !this.props.isLoggedIn ?
              (<Login
                login={this.props.login}
                signup={this.props.wantsSignupModal}
              />)
                :
              (<span className='headerFlexItem'>
                <button className='' onClick={this.props.handleLogout}>Sign Out</button>
              </span>)
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Header;