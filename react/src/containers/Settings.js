import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Management from 'material-ui/svg-icons/action/settings-applications'
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import Tools from 'material-ui/svg-icons/action/build'
import Resources from 'material-ui/svg-icons/action/description'


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWantsAccount: true,
      userWantsAdvanced: false,
      userWantsResources: false
    }
      this.handleTabClick = this.handleTabClick.bind(this);
    }

  handleTabClick(e){
    console.log('inside tab click yeah label buddy',  e);
    if (e==='1') {
      this.setState({
        userWantsAccount: true,
        userWantsAdvanced: false,
        userWantsResources: false
      })
    }  if (e==='2') {
      this.setState({
        userWantsAccount: false,
        userWantsAdvanced: true,
        userWantsResources: false
      })
    } else if(e==='3'){
      this.setState({
        userWantsAccount: false,
        userWantsAdvanced: false,
        userWantsResources: true
      })
    }
  }


  render() {
    if(this.state.userWantsAccount) {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >

              <Tab
               icon={<Management />}
               label="System Management"
                onClick={ () => ( this.handleTabClick('1') )}
              />

              <Tab
                icon={<Tools />}
                label="Tools"
                onClick={ () => ( this.handleTabClick('2') )}
              />

              <Tab
                icon={<Resources />}
                label="Resources"
                onClick={ () => ( this.handleTabClick('3'))}
              />

            </Tabs>
          </div>
          <div>
            <h1> Helpful Tips </h1>
          </div>
        </div>
        )
      } else if (this.state.userWantsAdvanced) {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >
              <Tab
               icon={<Management />}
               label="System Management"
                onClick={ () => ( this.handleTabClick('1') )}
              />
              <Tab
                icon={<Tools />}
                label="Tools"
                onClick={ () => ( this.handleTabClick('2') )}
              />
              <Tab
                icon={<Resources />}
                label="Resources"
                onClick={ () => ( this.handleTabClick('3'))}
              />
            </Tabs>
          </div>
          <div>
            <h1> Tools </h1>
          </div>
        </div>

        )
      } else  {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >
              <Tab
               icon={<Management />}
               label="System Management"
                onClick={ () => ( this.handleTabClick('1') )}
              />
              <Tab
                icon={<Tools />}
                label="Tools"
                onClick={ () => ( this.handleTabClick('2') )}
              />
              <Tab
                icon={<Resources />}
                label="Resources"
                onClick={ () => ( this.handleTabClick('3'))}
              />
            </Tabs>
          </div>
          <div>
            <h1> System Management </h1>
          </div>
        </div>
        )
      }
    }
  }

export default Settings;