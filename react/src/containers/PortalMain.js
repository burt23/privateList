import React, {Component} from 'react';
import PortalMainTabs from './PortalMainTabs.js';
import PortalMainRight from './PortalMainRight.js';
import SignupWizard from './SignupWizard.js';


export default class PortalMain extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  };


    render() {

      if (this.props.connectFirstDevice) {

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
          <div>
            <h2>0000</h2>
          </div>
        )
      } else if (this.props.portalIndex==='1'){
        return (
          <div className='portalMain'>
            <PortalMainTabs />

            <div className='portalTable'>

            <PortalMainRight />
          </div>
        </div>
      );

      } else if (this.props.portalIndex==='2'){
        return (
          <div>
            <h2>222</h2>
          </div>
        )
      } else if (this.props.portalIndex==='3'){
        return (
          <div>
            <h2>333</h2>
          </div>
        )
      } else if (this.props.portalIndex==='4'){
        return (
          <div>
            <h2>444</h2>
          </div>
        )
      }
  }
}

