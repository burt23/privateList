import React from 'react';
import Signup from './Signup.js';
import AccessToken from './AccessToken.js';
import Overview from '../components/Overview.js';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    // bind functions
  }

  render(){
    return(
      <div>
        {/*****************  ACCESS TOKEN BAR  ******************/}
        <div className='homepageFlexboxTopBar'>
           <div className='homepageFlexItemTopBar'>
            <AccessToken
              checkToken={this.props.checkToken}
            />
          </div>
        </div>
        {/*****************  HOMEPAGE FLEXBOX  ******************/}
        <div className='homepageFlexbox'>
          {/*****************  HOMEPAGE LEFT SIDE  ******************/}
          <div className='homepageFlexItem homepageFlexItemLeft'>
            <Overview />
          </div>
          {/*****************  HOMEPAGE RIGHT SIDE  ******************/}
          <div className='homepageFlexItem homepageFlexItemRight'>
            <Signup
              signup={this.props.signup}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;