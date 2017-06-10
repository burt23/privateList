import React from 'react';
import Lists from './Lists.js';
import Messages from './Messages.js';
import PortalMain from './PortalMain.js';
import PortalVerticalTabs from './PortalVerticalTabs.js';
import Settings from 'material-ui/svg-icons/action/settings.js'
import WiFi from 'material-ui/svg-icons/device/wifi-tethering.js'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import IconButton from 'material-ui/IconButton';
import PortalIconMenu from './PortalIconMenu.js';
import BottomNavPortal from './BottomNavPortal.js';
import Data from '../data/network.json';

import {AutoComplete, DropDownMenu, SvgIcon, MenuItem } from 'material-ui';

class Portal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      searchValue: '',
      dropDownValue: 1
    };
    // bind functions
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);

  }

  handleDropDownChange(event){
    console.log('inside handleDropDownChange function', event.target.value)
    this.setState({
      dropDownValue: event.target.value
    })
    console.log('data', Data);
  }

  handleSearchChange(event){
    this.setState({
      searchValue: event.target.value,
      dataSource: [
        searchValue,
        searchValue + searchValue,
        searchValue + searchValue + searchValue,
      ],
    })
  }

  render(){
    return(
      <section id="portal">
        <header>
          <ul>
            <li id='portalLogo'>Node 360</li>
            <li id='portalSearch'>
              <AutoComplete
                dataSource={this.state.dataSource}
                hintText="Search Anything"
                onChange={this.handleSearchChange}
                fullWidth={true}

              />
            </li>
            <PortalIconMenu />
          </ul>
        </header>

        <PortalVerticalTabs />

        <main>
          <PortalMain
            connectFirstDevice={this.props.connectFirstDevice}
            completeWhiz={this.props.completeWhiz}
          />
        </main>

        <footer className='bottomNav'>
          <BottomNavPortal className='bottomNav'/>
        </footer>

      </section>
    )
  }
}

export default Portal;
