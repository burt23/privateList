import React, {Component} from 'react';
import PortalMainTabs from './PortalMainTabs.js';
import PortalMainRight from './PortalMainRight.js';
import SignupWizard from './SignupWizard.js';


export default class PortalMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      connectFirstDevice: false
    }
  };

  render() {
    if(this.state.connectFirstDevice) {
      return (
        <div>
          <h2>Setup Wizard</h2>
          <SignupWizard />
        </div>
      )
    }
    return (
      <div className='portalMain'>
        <PortalMainTabs />

        <div className='portalTable'>

        <PortalMainRight />
        </div>
      </div>
    );
  }
}

