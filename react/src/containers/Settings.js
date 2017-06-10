import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Management from 'material-ui/svg-icons/action/settings-applications'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import Tools from 'material-ui/svg-icons/action/build'
import Resources from 'material-ui/svg-icons/action/description'


class Settings extends React.Component {
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
        icon={<Management />}
        label="System Management"
      />
      <Tab
        icon={<Tools />}
        label="Tools"
      />
      <Tab
        icon={<Resources />}
        label="Resources"
      />
    </Tabs>
    )
  }
}

export default Settings;