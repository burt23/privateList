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


          </div>
        </div>
        {/*****************  HOMEPAGE FLEXBOX  ******************/}
      </div>
    )
  }
}

export default Homepage;