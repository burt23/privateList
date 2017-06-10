import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Check from 'material-ui/svg-icons/notification/network-check'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import Hub from 'material-ui/svg-icons/hardware/device-hub';
import WiFi from 'material-ui/svg-icons/device/wifi-tethering';


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
  console.log('inside tab click yeah label buddy',  e.target.value);

}


render() {
  if(this.state.userWantsGateways) {
    return (
      <Tabs
        className='portalTabs' >
        <Tab
          icon={<WiFi />}
          label="Gateways"
          onClick={this.handleTabClick.bind(this)}
          value='2'
        />
        <Tab
          icon={<Hub />}
          label="Peripherials"
        />
        <Tab
          icon={<Check />}
          label="Network Check"
        />
      </Tabs>
      )
    } else if (this.state.userWantsPeripherials) {
    return (
      <Tabs className='portalTabs' >
        <Tab
          icon={<WiFi />}
          label="Gateways"
        />
        <Tab
          icon={<Hub />}
          label="Peripherials"
        />
        <Tab
          icon={<Check />}
          label="Network Check"
        />
      </Tabs>

      )
    } else  if (this.state.userWantsCheck) {
    return (
      <Tabs className='portalTabs' >
        <Tab
          icon={<WiFi />}
          label="Gateways"
        />
        <Tab
          icon={<Hub />}
          label="Peripherials"
        />
        <Tab
          icon={<Check />}
          label="Network Check"
        />
      </Tabs>
      )
    }
  }
}

export default Network;