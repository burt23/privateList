import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import Security from 'material-ui/svg-icons/action/fingerprint';
import Satellite from 'material-ui/svg-icons/maps/satellite'
import Cloud from 'material-ui/svg-icons/file/cloud.js'


class Devices extends React.Component {
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
        icon={<Satellite />}
        label="Satellite"
      />
      <Tab
        icon={<Cloud />}
        label="Cloud"
      />
      <Tab
        icon={<Security />}
        label="Security"
      />
    </Tabs>
    )
  }
}

export default Devices;