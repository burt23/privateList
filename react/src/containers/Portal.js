import React from 'react';
import Lists from './Lists.js';
import Messages from './Messages.js';
import PortalMain from './PortalMain.js';
import PortalVerticalTabs from './PortalVerticalTabs.js';
import Settings from 'material-ui/svg-icons/action/settings.js'
import WiFi from 'material-ui/svg-icons/device/wifi-tethering.js'
import BadgeIcon from '../components/Badge.jsx';
import Menu from 'material-ui/svg-icons/navigation/menu.js'
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
      dropDownValue: 1,
      openMenu: false,
      portalIndex: 0,
    };
    // bind functions
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleWindowChange = this.handleWindowChange.bind(this);


  }

  handleIndexChange(portalIndex){
    console.log('inside handleIndexChangePORTAL', portalIndex);
    this.setState({
      portalIndex
    }, this.handleWindowChange(portalIndex))

    console.log('portalIndexpost async, should hit first', this.state.portalIndex)
  }

  handleWindowChange(e){
    console.log('inside handleWindowChangeASYNCPORTAL', e)
    console.log('inside handleWindowChangeASYNCPORTAL', this.state.portalIndex);
  }

  handleDropDownChange(event){
    console.log('inside handleDropDownChange function', event.target.value)
    this.setState({
      dropDownValue: event.target.value
    })

  }

  handleMenuClick(event){
    console.log('menu clicked', this.state.openMenu)
    this.props.handleOpenMenu();
  }

  handleSearchChange(event){

    console.log('handleSearchChange event', event)

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

      <section id={!this.state.openMenu ? 'portal' : 'portalClosedMenu'}>

        <header>
          <ul>
            <li onClick={this.handleMenuClick}>
              <IconButton>
                <Menu id='portalLogo'/>
              </IconButton>
            </li>
            <li id='portalSearch'>
              <AutoComplete
                dataSource={this.state.dataSource}
                hintText="Search Anything"
                onChange={this.handleSearchChange}
                fullWidth={true}

              />
            </li>
            <li>
              <BadgeIcon />
            </li>
            <li>
              <PortalIconMenu />
            </li>
          </ul>
        </header>



        <PortalVerticalTabs
          handleIndexChange={this.handleIndexChange}
          changePortalIndex={this.props.changePortalIndex}
        />



        <main>
          <PortalMain
            connectFirstDevice={this.props.connectFirstDevice}
            completeWhiz={this.props.completeWhiz}
            portalIndex={this.props.portalIndex}
          />
        </main>


      </section>
    )
  }
}

export default Portal;
        // <footer className='bottomNav'>
        //   <BottomNavPortal className='bottomNav'/>
        // </footer>
