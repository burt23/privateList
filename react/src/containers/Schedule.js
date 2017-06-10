import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Alarm from 'material-ui/svg-icons/action/alarm'
import Create from 'material-ui/svg-icons/content/create'
import Timeline from 'material-ui/svg-icons/action/timeline'


class Schedule extends React.Component {
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
        icon={<Alarm />}
        label="Active Jobs"
      />
      <Tab
        icon={<Create />}
        label="Create Jobs"
      />
      <Tab
        icon={<Timeline />}
        label="Analysis"
      />
    </Tabs>
    )
  }
}

export default Schedule;
