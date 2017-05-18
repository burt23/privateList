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

        <div className='homepageFlexboxTopBar'>
           <div className='homepageFlexItemTopBar'>
            <AccessToken
              checkToken={this.props.checkToken}
            />
          </div>
        </div>

        <div className='homepageFlexbox'>

          <div className='homepageFlexItem homepageFlexItemLeft'>
            <Overview />
          </div>

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