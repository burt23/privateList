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
        >
        <Menu />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onClick={(open) => this.setState({open})}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default MagicMenu;