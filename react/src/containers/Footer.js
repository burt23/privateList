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
            Made with Love by <a href="https://github.com/burt23">@burt23</a>
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
          <a href="https://en.wikipedia.org/wiki/MIT_License">
            <h4> MIT License </h4>
          </a>
        </div>

      </div>)
  }
}

export default Footer;
