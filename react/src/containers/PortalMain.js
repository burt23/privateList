import React, {Component} from 'react';
import PortalMainTabs from './PortalMainTabs.js';
import PortalMainRight from './PortalMainRight.js';
import SignupWizard from './SignupWizard.js';


export default class PortalMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      connectFirstDevice: true
    }
  };

  render() {
    if(this.props.connectFirstDevice) {
      return (
        <div>
          <h2>Setup Wizard</h2>
          <SignupWizard
            completeWhiz={this.props.completeWhiz}
          />
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

