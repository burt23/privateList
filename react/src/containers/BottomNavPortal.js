import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Home from 'material-ui/svg-icons/action/home.js';
import Power from 'material-ui/svg-icons/image/flash-on.js';
import App from 'material-ui/svg-icons/navigation/apps.js';
import Farming from 'material-ui/svg-icons/maps/terrain.js';
import Water from 'material-ui/svg-icons/maps/local-drink.js';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSchedule from 'material-ui/svg-icons/action/date-range';
import ActionNetwork from 'material-ui/svg-icons/device/wifi-tethering.js';
import ActionHardware from 'material-ui/svg-icons/hardware/devices-other.js';
import ActionSettings from 'material-ui/svg-icons/action/settings.js';
import ActionCloud from 'material-ui/svg-icons/file/cloud-queue.js';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const homeIcon = <Home />;
const farmingIcon = <Farming />;
const powerIcon = <Power />;
const waterIcon = <Water />;
const appIcon = <App />;
const dashboardIcon = <ActionDashboard />
const networkIcon = <ActionNetwork />
const settingsIcon = <ActionSettings />
const scheduleIcon = <ActionSchedule />
const cloudIcon = <ActionCloud />

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavPortal extends Component {
  constructor(props){
    super(props);
    this.state = {
  };
  this.select = this.select.bind(this);
}

  select(index){
    console.log('just sele1cted :) ', index)
    this.props.changePortalIndex(index)
  }

  render() {
    console.log('BottomNavigationPortal updating', this.props.portalIndex)
    return (
      <div >
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.props.portalIndex}>
            <BottomNavigationItem
              label="Dashboard"
              icon={dashboardIcon}
              onClick={() => this.select('0')}
            />
            <BottomNavigationItem
              label="Network"
              icon={networkIcon}
              onClick={() => this.select('1')}
            />
            <BottomNavigationItem
              label="Schedule"
              icon={scheduleIcon}
              onClick={() => this.select('2')}
            />
            <BottomNavigationItem
              label="Cloud"
              onClick={() => this.select('3')}
              icon={cloudIcon}
            />
            <BottomNavigationItem
              label="Settings"
              icon={settingsIcon}
              onClick={() => this.select('4')}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

export default BottomNavPortal;