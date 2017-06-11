import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Check from 'material-ui/svg-icons/notification/network-check'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import Hub from 'material-ui/svg-icons/hardware/device-hub';
import WiFi from 'material-ui/svg-icons/device/wifi-tethering';
import Gateways from './PortalMainRight.js';


class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWantsGateways: true,
      userWantsPeripherials: false,
      userWantsCheck: false
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

handleTabClick(e){
  console.log('inside tab click yeah label buddy',  e);
  if (e==='1') {
    this.setState({
      userWantsGateways: true,
      userWantsPeripherials: false,
      userWantsCheck: false
    })
  }  if (e==='2') {
    this.setState({
      userWantsGateways: false,
      userWantsPeripherials: true,
      userWantsCheck: false
    })
  } else if(e==='3'){
    this.setState({
      userWantsGateways: false,
      userWantsPeripherials: false,
      userWantsCheck: true
    })
  }
}


render() {
  if(this.state.userWantsGateways) {
    return (
      <div>
        <div>
          <Tabs className='portalTabs' >

            <Tab
              icon={<WiFi />}
              label="Gateways"
              onClick={ () => ( this.handleTabClick('1') )}
            />

            <Tab
              icon={<Hub />}
              label="Peripherials"
              onClick={ () => ( this.handleTabClick('2') )}
            />

            <Tab
              icon={<Check />}
              label="Network Check"
              onClick={ () => ( this.handleTabClick('3'))}
            />

          </Tabs>
        </div>
        <div>
          <Gateways />
        </div>
      </div>
      )
    } else if (this.state.userWantsPeripherials) {
    return (
      <div>
        <div>
          <Tabs className='portalTabs' >
            <Tab
              icon={<WiFi />}
              label="Gateways"
              onClick={ () => ( this.handleTabClick('1') )}
            />
            <Tab
              icon={<Hub />}
              label="Peripherials"
              onClick={ () => ( this.handleTabClick('2') )}
            />
            <Tab
              icon={<Check />}
              label="Network Check"
              onClick={ () => ( this.handleTabClick('3'))}
            />
          </Tabs>
        </div>
        <div>
        <Gateways />
        </div>
      </div>

      )
    } else  {
    return (
      <div>
        <div>
          <Tabs className='portalTabs' >
            <Tab
              icon={<WiFi />}
              label="Gateways"
              onClick={ () => ( this.handleTabClick('1') )}
            />
            <Tab
              icon={<Hub />}
              label="Peripherials"
              onClick={ () => ( this.handleTabClick('2') )}
            />
            <Tab
              icon={<Check />}
              label="Network Check"
              onClick={ () => ( this.handleTabClick('3'))}
            />
          </Tabs>
        </div>
        <div>
          <h1> Network Check </h1>
        </div>
      </div>
      )
    }
  }
}

export default Network;