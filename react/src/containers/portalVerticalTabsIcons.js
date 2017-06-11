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
import MagicMenu from './MagicMenu.js';
import Menu from 'material-ui/svg-icons/navigation/menu.js'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class PortalVerticalTabsIcons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  handleToggle(e){
    console.log('handleTogglebabbbbbby', e.target.value)
    if(typeof e.target.value !== 'string'){
      console.log('trust');

      this.setState({
        open: !this.state.open
      });
    }
  }

  handleClose(){
      console.log('handleCLOSEEEEEEEERR')
      this.setState({
        open: false
      });
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

      <div className="vnavFlex">

        <div className="vnavChild" onClick={this.handleToggle}>
          <IconButton
            label="Open Drawer"
            iconStyle={styles.smallIcon}
          >
            <Menu />
          </IconButton>
        </div>
        <div className="vnavChild" onClick={this.handleIndexChange}>
          <IconButton
            iconStyle={styles.smallIcon}
            style={styles.small}
            value={'0'}
          >
            <ActionDashboard />
          </IconButton>
        </div>

        <div className="vnavChild" onClick={this.handleIndexChange}>
         <IconButton
           iconStyle={styles.smallIcon}
           style={styles.small}
           label="test"
           value={'1'}
         >
           <ActionNetwork/>
         </IconButton>
        </div>

        <div className="vnavChild" onClick={this.handleIndexChange}>

          <IconButton
            iconStyle={styles.smallIcon}
            style={styles.small}
            value={'2'}
          >
            <ActionSchedule />
          </IconButton>
        </div>

        <div className="vnavChild" onClick={this.handleIndexChange}>

            <IconButton
              iconStyle={styles.smallIcon}
              style={styles.small}
              value={'3'}
            >
               <ActionHardware />
            </IconButton>
        </div>
        <div className="vnavChild" onClick={this.handleIndexChange}>
              <IconButton
                iconStyle={styles.smallIcon}
                style={styles.small}
                value={'4'}

              >
              <ActionSettings />
            </IconButton>



      </div>
      <div>
            <Drawer
              style={styles.small}
              docked={false}
              width={200}
              open={this.state.open}
              className={this.state.open ? '' : 'hidden'}
              onClick={(open) => this.setState({open})}
              id='drawerFlexbox'
            >

            <ul>
               <li>
              <MenuItem className='drawerFI' onClick={this.handleClose}>Dashboard</MenuItem>
              </li>
              <li>
                <MenuItem className='drawerFI' onClick={this.handleClose}>Network</MenuItem>
              </li>
              <li>
                <MenuItem className='drawerFI' onClick={this.handleClose}>Schedule</MenuItem>
              </li>
              <li>
                <MenuItem className='drawerFI' onClick={this.handleClose}>Devices</MenuItem>
              </li>
              <li>
                <MenuItem className='drawerFI' onClick={this.handleClose}>Apps</MenuItem>
              </li>
            </ul>
          </Drawer>
          </div>
        </div>
    )
  }
}

export default PortalVerticalTabsIcons;


