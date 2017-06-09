import React from 'react';
import Lists from './Lists.js';
import Messages from './Messages.js';
import PortalTopBar from './PortalTopBar.js';
import PortalMain from './PortalMain.js';
import PortalVerticalTabs from './PortalVerticalTabs.js';
import Settings from 'material-ui/svg-icons/action/settings.js'
import WiFi from 'material-ui/svg-icons/device/wifi-tethering.js'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import IconButton from 'material-ui/IconButton';
import BottomNavPortal from './BottomNavPortal.js';

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
              />
            </li>
            <li id='portalSettings'>
            <Bluetooth id='Bluetooth'/>
            <WiFi id='WiFi'/>
            <Settings id='settings'/>


            </li>
          </ul>
        </header>

        <PortalVerticalTabs />
        <main>
          <PortalMain />
        </main>
        <footer className='bottomNav'>
          <BottomNavPortal className='bottomNav'/>
        </footer>
      </section>
    )
  }
}

export default Portal;
            // <Messages
            //   items={this.props.items}
            //   delete={this.props.delete}
            // />
            //  <PortalTopBar search={this.props.search}/>
            // <Lists
            //   lists={this.props.lists}
            //   addList={this.props.addList}
            // />