import React, {Component} from 'react';
import PortalMainTabs from './PortalMainTabs.js';
import PortalMainRight from './PortalMainRight.js';
import SignupWizard from './SignupWizard.js';
import Settings from './Settings.js'
import Schedule from './Schedule.js'
import Network from './Network.js'
import Devices from './Devices.js'


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
          <Network />

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
          <div>
            <h2>Setup Wizard</h2>
            <SignupWizard
              completeWhiz={this.props.completeWhiz}
            />
          </div>
        )

      } else if (this.props.portalIndex==='0'){
        return (

          <section id='dashboard'>
            <ul>
              <li id='dashUL'></li>
              <li id='dashUR'></li>
              <li id='dashLL'></li>
              <li id='dashLR'></li>
            </ul>
          </section>

        )
      }
  }
}

