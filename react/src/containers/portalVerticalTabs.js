import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import WiFi from 'material-ui/svg-icons/device/wifi-tethering.js'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionSchedule from 'material-ui/svg-icons/action/date-range';
import ActionNetwork from 'material-ui/svg-icons/device/wifi-tethering.js';
import ActionHardware from 'material-ui/svg-icons/hardware/devices-other.js';
import ActionSettings from 'material-ui/svg-icons/action/settings.js';
import IconButton from 'material-ui/IconButton';





class PortalVerticalTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  handleIndexChange(event){
    console.log('VERTICAL TABS', event.target.value);
    this.props.changePortalIndex(event.target.value);
  }

  render(){

    const styles = {
      smallIcon: {
        width: 36,
        height: 36,
      },
      mediumIcon: {
        width: 48,
        height: 48,
      },
      largeIcon: {
        width: 60,
        height: 60,
      },
      small: {
        width: 72,
        height: 72,
        padding: 16,
      },
      medium: {
        width: 96,
        height: 96,
        padding: 24,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
    };

    return(
      <nav>
        <section>
          <div>
            <IconButton
              iconStyle={styles.largeIcon}
              style={styles.large}
              value={'0'}
              onClick={this.handleIndexChange}

            >
              <ActionDashboard />
            </IconButton>

            <span>Dashboard</span>

          </div>

          <div>
           <IconButton
             iconStyle={styles.largeIcon}
             style={styles.large}
             label="test"
             value={'1'}
              onClick={this.handleIndexChange}
           >
             <ActionNetwork/>
           </IconButton>
            <span>Network</span>


          </div>

          <div>
            <IconButton
              iconStyle={styles.largeIcon}
              style={styles.large}
              onClick={this.handleIndexChange}
              value={'2'}
            >
            <ActionSchedule />
          </IconButton>
          <span>Schedule</span>

          </div>

          <div>
            <IconButton
              iconStyle={styles.largeIcon}
              style={styles.large}
              value={'3'}
              onClick={this.handleIndexChange}

            >
               <ActionHardware />
            </IconButton>
            <span>Devices</span>
          </div>
          <div>
              <IconButton
                iconStyle={styles.largeIcon}
                style={styles.large}
                value={'4'}
                onClick={this.handleIndexChange}

              >
              <ActionSettings />
            </IconButton>
            <span>Settings</span>
          </div>
        </section>
      </nav>
    )
  }
}

export default PortalVerticalTabs;


