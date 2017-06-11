import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, {Component} from 'react';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';


/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
class PortalIconMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      openMenu: false
  };
  this.handleOpenMenu = this.handleOpenMenu.bind(this);
  this.handleChangePage = this.handleChangePage.bind(this);
}


  handleOpenMenu(){
  console.log('yeah buddy openMenu')
    this.setState({
      openMenu: true,
    });
  }

  handleChangePage(e){
  console.log('yeah buddy handleChangePage', e)
    this.setState({
      openMenu: false,
    });
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton
            onClick={this.handleOpenMenu}><MoreVertIcon /></IconButton>}

          value={this.state.valueSingle}
          open={this.state.openMenu}
        >
          <MenuItem value="1" onClick={this.handleChangePage}primaryText="Add Device" />
          <MenuItem value="2" onClick={this.handleChangePage}primaryText="Send feedback" />
          <MenuItem value="3" onClick={this.handleChangePage}primaryText="Settings" />
          <MenuItem value="4" onClick={this.handleChangePage}primaryText="Help" />
          <MenuItem value="5" onClick={(e)=>(this.handleChangePage.bind(this, 'e'))}primaryText="Sign out" />
        </IconMenu>
      </div>
    );
  }
}

export default PortalIconMenu;
