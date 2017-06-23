import React, {Component} from 'react';
import PortalMainTabs from './PortalMainTabs.js';
import PortalMainRight from './PortalMainRight.js';
import SignupWizard from './SignupWizard.js';
import Settings from './Settings.js'
import Schedule from './Schedule.js'
import Network from './Network.js'
import Devices from './Devices.js'
// import Dashboard from './Dashboard.js'
import Dashboard from './dash2.js'


export default class PortalMain extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  };


    render() {

      if (this.props.portalIndex==='1'){
        return (
          <div className='portalMain'>
          <Network
            devices={this.props.devices}
          />

            <div className='portalTable'>

          </div>
        </div>
      );

      } else if (this.props.portalIndex==='2'){
        return (
          <div>
            <Schedule />
          </div>
        )
      } else if (this.props.portalIndex==='3'){
        return (
          <div>
           <Devices />
          </div>
        )
      } else if (this.props.portalIndex==='4'){
        return (
          <div>
            <Settings />
          </div>
        )
      }
        else if (this.props.connectFirstDevice) {

        return (
          <div id="setupWizardWrapper">
            <SignupWizard
              completeWhiz={this.props.completeWhiz}
              user_id={this.props.user_id}
              setDevice={this.props.setDevice}
              device_id={this.props.device_id}
              device_name={this.props.device_name}
            />
          </div>
        )

      } else if (this.props.portalIndex==='0'){
        return (
          <Dashboard
            username={this.props.username}
            wantsWizard={this.props.wantsWizard}
            user_id={this.props.user_id}
            devices={this.props.devices}
            handleLogout={this.props.handleLogout}
            />


        )
      }
  }
}

