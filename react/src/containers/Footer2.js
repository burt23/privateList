import React from 'react';
import Login from '../containers/loginbar.js'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    //bind functions
    this.buttonClick= this.buttonClick.bind(this);
  }

 buttonClick(event){
    console.log('buttonClick');
    this.props.handleTokenChange();
  }

  render(){
    return(
      <div className='footerFlexbox'>

        <div className='footerFlexItem'>
          <button onClick={this.props.handleTokenChange}>
            Access Token
          </button>
        </div>

    </div>
  )}

}

export default Footer;
