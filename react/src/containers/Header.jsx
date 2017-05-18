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
      <div className='headerFlexbox'>


        <div className='headerFlexItem headFlexItemCenter'>
          <h1>
            Private List
          </h1>
        </div>

        <div className='headerFlexItem'>
          { !this.props.isLoggedIn ?
            (<Login
              login={this.props.login}
            />)
              :
            (<span className='headerFlexItem'>
              <button className='' onClick={this.props.handleLogout}>Sign Out</button>
            </span>)
          }
        </div>

      </div>)
  }

}

export default Header;