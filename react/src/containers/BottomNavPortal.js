import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Home from 'material-ui/svg-icons/action/home.js';
import Power from 'material-ui/svg-icons/image/flash-on.js';
import Farming from 'material-ui/svg-icons/maps/terrain.js';
import Water from 'material-ui/svg-icons/maps/local-drink.js';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;
const homeIcon = <Home />;
const farmingIcon = <Farming />;
const powerIcon = <Power />;
const waterIcon = <Water />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavPortal extends Component {
  constructor(props){
    super(props);
    this.state = {
    selectedIndex: 0,
  };
  this.select = this.select.bind(this);
}

  select(index){
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <div >
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Home"
              icon={homeIcon}

              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Water"
              icon={waterIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Farming"
              icon={farmingIcon}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Power"
              icon={powerIcon}
              onClick={() => this.select(3)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

export default BottomNavPortal;