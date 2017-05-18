import React from 'react';
import Login from '../containers/loginbar.js'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    //bind functions
  }
  render(){
    return(
      <div className='footerFlexbox'>


        <div className='footerFlexItem'>
          <h4>
            Made with Love by @burt23
          </h4>
        </div>
        {this.props.user_id &&
          <div className='footerFlexItem'>
            <button onClick={this.props.handleTokenChange}>
              Access Token
            </button>
          </div>
        }

        <div className='footerFlexItem'>
          <h4> MIT License </h4>
        </div>

      </div>)
  }

}

export default Footer;
