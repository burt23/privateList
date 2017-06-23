import React from 'react';
import PortalMain from './PortalMain.js';
import PortalIconMenu from './PortalIconMenu.js';
import BottomNavPortal from './BottomNavPortal.js';
import { AutoComplete } from 'material-ui';
import MagicMenu from './MagicMenu.js';
import WelcomeLogin from './welcomeLogin.js';

class Portal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      searchValue: '',
      dropDownValue: 1,
      portalIndex: 0,
      devices: []
    };
    // bind functions
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.getDevices = this.getDevices.bind(this);
  }
  componentWillMount(){
    // on load call fetch function to get devices from the db associated with their user_id
    this.props.getDevices(this.props.user_id);
  }

  getDevices(user_id) {
    // bind 'this' to preserve it's original 'context' inside fetch
    const context = this;

    // obj to pass into fetch function, modify for SSL
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id
      })
    }

    // Fetch takes two params: fn(url, optionsObject) returning promise
    fetch('http://localhost:3000/portal/init', init)
      .then( (data) => data.json() )
      .then( (devices) => {
        console.log('devicesFETCHPORTAL', devices)
        context.setState({
          devices
        })
      })
      .catch((e) => (console.error(e))
    );
  }

  handleDropDownChange(event){
    console.log('handleDropDownChange', event.target.value)
    this.setState({
      dropDownValue: event.target.value
    })
  }

  handleSearchChange(searchValue){
    // function enables dropDownMenu in autocomplete
    console.log('handleSearchChange event', searchValue)
    this.setState({
      dataSource: [
        searchValue,
        searchValue + searchValue,
        searchValue + searchValue + searchValue,
      ],
    })
  }

  render(){

    // Entry Point to portal css3 grid
    // nav areas: header, main, and footer

    return(

      <div>
        <div className='welcomeGrid'>
          <div id="welcomeHeaderLeft">
            <MagicMenu />
          </div>

           <div id="welcomeHeaderCenter">
             <h2>
               NODE360
              </h2>
            </div>
          <div id="welcomeHeaderRight" onClick={this.handleWelcomeMenu}>
            <WelcomeLogin
              handleWelcomeMenu={this.handleWelcomeMenu}
            />
          </div>

            {this.state.userWantsLoginMenu &&

              <div id="welcomeLoginMenuWrapper">
                <div id="welcomeLoginMenu">
                  <ul>
                    <li  label="Modal Dialog" onClick={this.handleLoginPortalOpen} >
                      <div>

                        <a>Login</a>
                        {/*<RaisedButton label="Modal Dialog" onClick={this.handleLoginPortalOpen} />
                      */}

                        <Dialog
                          title="Dialog With Actions"
                          actions={actions}
                          modal={true}
                          open={this.state.userWantsLoginPortal}
                        >
                          <Login
                            invalidUserPass={this.state.invalidUserPass}
                            login={this.login}
                            isLoggedIn={this.state.isLoggedIn}
                            wantsSignupModal={this.wantsSignupModal}
                            signup={this.signup}
                          />
                        </Dialog>
                      </div>

                    </li>
                    <li onClick={this.wantsSignupModal}><a>Signup</a></li>
                    <li><a>Support</a></li>
                    <li><a>About</a></li>
                  </ul>
                </div>
              </div>
            }

            <div id="portalCenter">

              <PortalMain
                portalIndex={this.props.portalIndex}
                connectFirstDevice={this.props.connectFirstDevice}
                username={this.props.username}
                wantsWizard={this.props.wantsWizard}
                user_id={this.props.user_id}
                devices={this.props.devices}
                handleLogout={this.props.handleLogout}
                completeWhiz={this.props.completeWhiz}
                setDevice={this.props.setDevice}
                device_id={this.props.device_id}
                device_name={this.props.device_name}
              />
            </div>
             <div className="welcomeFooter">
                <BottomNavPortal
                  portalIndex={this.props.portalIndex}
                  changePortalIndex={this.props.changePortalIndex}
                />
             </div>
          </div>
        </div>
    )
  }
}

export default Portal;
       {/*
        <section id='welcomeBannerTagline'>

          <h1>
            Join our IoT revolution
          </h1>
          <div>
            <h3>Conserving precious resources, empowering decision makers, improving health and safety, and enriching lives through a radically new approach to wireless
            </h3>
            <br />
            <RaisedButton
              id='welcomeBannerButton'
              label="Learn More"
              primary={true}
              onClick={this.learnMore}
              style={{width: '50%', margin: '1em'}}
            />
          </div>
        </section>

       TODO ADD CHEVRONS FOR MAIN TOPIC PANELS: BT, THREAD, LoRa, Product Promo

        <div id='welcomeBannerLeftArrow'>
          <LeftChevron />
        </div>
        <div id='welcomeBannerRightArrow'>
        <RightChevron />
        </div>
        <div id='welcomeBannerDownArrow'>
        <Down />
      </div>
       */}
        // <footer className='bottomNav'>
        //   <BottomNavPortal className='bottomNav'/>
        // </footer>
        {/*
        <nav>
          <PortalVerticalTabs
            handleIndexChange={this.handleIndexChange}
          />
        </nav>
      <nav>
        <PortalVerticalTabsIcons
          handleIndexChange={this.handleIndexChange}
          changePortalIndex={this.props.changePortalIndex}
          handleIndexChange={this.handleIndexChange}
          changePortalIndex={this.props.changePortalIndex}
        />
      </nav>
      */}
// import PortalVerticalTabs from './PortalVerticalTabs.js';
// import PortalVerticalTabsIcons from './PortalVerticalTabsIcons.js';


  // handleIndexChange(portalIndex){
  //   console.log('inside handleIndexChangePORTAL', portalIndex);
  //   this.setState({
  //     portalIndex
  //   })

  //   console.log('portalIndexpost async, should hit first', this.state.portalIndex)
  // }

// this.handleIndexChange = this.handleIndexChange.bind(this);
    // this.handleWindowChange = this.handleWindowChange.bind(this);