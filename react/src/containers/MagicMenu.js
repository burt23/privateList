import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu.js'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MagicMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){
    console.log('handleTogglebabbbbbby')
    this.setState({
      open: !this.state.open
    });
  }
  handleClose(){
      console.log('handleCLOSEEEEEEEERR')
      this.setState({
        open: close
      });
    }


  render() {
    console.log('MagicMenu')
    return (
      <div onClick={this.handleToggle}>
        <IconButton
          label="Open Drawer"
          onClick={this.handleToggle}
          iconStyle={{ color: 'white', 'width': '10vw', height: '10vh'}}
        >
          <Menu
          />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onClick={(open) => this.setState({open})}
          id='drawerFlexbox'
        >
        <ul>
          <li>
          <MenuItem className='drawerFI' onClick={this.handleClose}>
          { !this.props.isLoggedIn ?
            (
            <h2>Overview</h2>
            ) : (
            <h2>Home</h2>
            )}
            </MenuItem>
          </li>
          <li>
            <MenuItem className='drawerFI' onClick={this.handleClose}>
              { !this.props.isLoggedIn ?
              (
              <h2>Bluetooth</h2>
              ) : (
              <h2>Network</h2>
              )}
            </MenuItem>
          </li>
          <li>
            <MenuItem className='drawerFI' onClick={this.handleClose}>
            { !this.props.isLoggedIn ?
            (
            <h2>LoRa</h2>
            ) : (
            <h2>Schedule</h2>
            )}
            </MenuItem>
          </li>
          <li>
            <MenuItem className='drawerFI' onClick={this.handleClose}>
            { !this.props.isLoggedIn ?
            (
            <h2>Thread</h2>
            ) : (
            <h2>Cloud</h2>
            )}
            </MenuItem>
          </li>
          <li>
            <MenuItem className='drawerFI' onClick={this.handleClose}>
            { !this.props.isLoggedIn ?
            (
            <h2>Setup</h2>
            ) : (
            <h2>Settings</h2>
            )}
            </MenuItem>
          </li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default MagicMenu;