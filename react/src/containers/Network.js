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
      userWantsAccount: true,
      userWantsAdvanced: false,
      userWantsResources: false
    }
    //bind
  }


render() {
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

export default Network;