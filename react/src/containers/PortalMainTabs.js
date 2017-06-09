import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import WiFi from 'material-ui/svg-icons/device/wifi-tethering.js'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'


const PortalMainTabs = () => (
  <Tabs className='portalTabs' >
    <Tab
      icon={<WiFi />}
      label="Gateways"
    />
    <Tab
      icon={<Bluetooth />}
      label="Peripherals"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="Sensors"
    />
  </Tabs>
);

export default PortalMainTabs;