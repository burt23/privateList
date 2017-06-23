import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
// import Login from './containers/Login.js';
import Login from './containers/WelcomeMenuLogin.js';
import Header from './containers/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from './containers/Footer.js';
import Portal from './containers/Portal.js';
import TokenModal from './containers/TokenModal.js';
import SignupModal from './containers/SignupModal.js';
import RaisedButton from 'material-ui/RaisedButton';
import RightChevron from 'material-ui/svg-icons/navigation/chevron-right';
import LeftChevron from 'material-ui/svg-icons/navigation/chevron-left';
import Down from 'material-ui/svg-icons/navigation/expand-more';
import MagicMenu from './containers/MagicMenu.js'
import WelcomeLogin from './containers/welcomeLogin.js'
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      lists: ['one', 'two', 'three'],
      isLoggedIn: false,
      user_id: null,
      showToken: false,
      accessToken: '',
      requestedToken: false,
      userCanEdit: false,
      invalidUserPass: false,
      senderEmail: '',
      emailError: false,
      wantsSignupModal: false,
      username: 'Fredric',
      connectFirstDevice: false,
      openMenu: false,
      portalIndex: '0',
      wizardIndex: '0',
      wizardConnectionType: '',
      userWantsLoginMenu: false,
      userWantsLoginPortal: false,
      portalBottomNavTabIndex: 1,
      device_id: '',
      device_name: '',
      device_lat: '',
      device_long: '',
      devices: []
    };

    this.getDevices = this.getDevices.bind(this);
    this.search = this.search.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.get = this.get.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.delete = this.delete.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.checkToken = this.checkToken.bind(this);
    this.generateAccessToken = this.generateAccessToken.bind(this);
    this.handleSenderEmail = this.handleSenderEmail.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handleModalExit = this.handleModalExit.bind(this);
    this.addList = this.addList.bind(this);
    this.wantsSignupModal = this.wantsSignupModal.bind(this);
    this.completeWhiz = this.completeWhiz.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this)
    this.changePortalIndex = this.changePortalIndex.bind(this)
    this.wantsWizard = this.wantsWizard.bind(this)
    this.learnMore = this.learnMore.bind(this);
    this.handleWelcomeMenu = this.handleWelcomeMenu.bind(this);
    this.handleLoginPortalOpen = this.handleLoginPortalOpen.bind(this);
    this.handleLoginPortalClose = this.handleLoginPortalClose.bind(this);
    this.setDevice = this.setDevice.bind(this)

  }

  getDevices(user_id){
    const context = this;

    console.log('getting all devices for user_id', user_id)

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id
      })
    }

    fetch('http://localhost:3000/portal/init', init)
      .then( (data) => data.json() )
      .then( (devices) => {
        console.log('getting devices inside index', devices)
        context.setState({
          devices
        })
      })
      .catch((e) => (console.error(e))
    );
  }

  handlePortalBottomNavChange(index){
    console.log('inside handlePortalBottomNavChange', index)

    this.setState({
      portalBottomNavTabIndex: index
    })
  }

  setDevice(device){
    console.log('setting device inside index, passed deviced obj:', device)

    if (device.device_id !== undefined) {
      this.setState({
        device_id: device.device_id,
        device_name: device.device_name
      })

    } else if (device.device_lat && device.device_long)
      this.setState({
        device_lat: device.device_lat,
        device_long: device.device_long
      })
  }

  handleLoginPortalClose(){
    console.log('trying to close to portal!')
    this.setState({
      userWantsLoginPortal: false,
      userWantsLoginMenu: false
    })
  }

handleLoginPortalOpen(){
  console.log('trying to open to portal!')
    this.setState({
      userWantsLoginPortal: true
    })
  }

  handleWelcomeMenu() {
    console.log('clickedWelcomeMenu');
    this.setState({
      userWantsLoginMenu: !this.state.userWantsLoginMenu
    })
  }

  changePortalIndex(i){
    console.log('inside change portalIndexFROMINDEX', i)
    const navMenu = [
     '1', '2', '3', '4', '0'
    ]
    let valid = navMenu.includes(i) === true ? true : false;
    console.log('validityCheck', valid);
    if(valid){
      console.log('validInput:', i)
      this.setState({
        portalIndex: i
      })
    }
  }

  learnMore() {
    console.log('inside learnmore click');
  }

  handleOpenMenu() {
    console.log('inside handleOpenMenu pre changed', this.state.openMenu);

    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  completeWhiz(){
    console.log('completing teh wizard')

    this.setState({
      connectFirstDevice: false
    })

    this.getDevices(this.state.user_id);
  }

  wantsWizard(){
    console.log('opening the wizard index');
    this.setState({
      connectFirstDevice: true
    })
  }

  wantsSignupModal(event){
    console.log('clicked wantsSignupModal');
    this.setState({
      wantsSignupModal: !this.state.wantsSignupModal
    })
  }

  handleLogout(event){
    this.setState({
      isLoggedIn: false,
      showToken: false,
      wantsSignupModal: false,
      showToken: false,
      requestedToken: false,
      invalidUserPass: false
    })
  }

  handleModalExit(event){
    console.log('almost there', event)
    this.setState({
      showToken: false
    })
  }

  handleEmailSubmit(event){
    console.log('inside email submit')
    event.preventDefault();

    event.stopPropagation();
    this.emailToken(this.state.senderEmail, this.state.accessToken);
  }

  emailToken(email, token){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/email',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: email,
        token: token
      }),
      success: function(data){
        console.log('mailed token', data);
        context.setState({
          tokenMailed: true,
          showToken: false
        });
      },
      error: function(error){
        console.log(error);
        context.setState({
          emailError: true
        })
      }
    })
  }

  handleSenderEmail(event){
    this.setState({
      senderEmail: event.target.value
    });
  }

  handleTokenChange(event) {
    console.log('inside token change');
    if(!this.state.requestedToken){
      this.setState({
        requestedToken: true
      });
      this.generateAccessToken(this.state.accessToken);
    }
  }

  generateAccessToken(){
    var context = this;

    $.ajax({
      url: 'http://localhost:3000/token/new',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        user_id: this.state.user_id,
        token: this.state.accessToken
      }),
      success: function(data){
        // console.log('data from access token', data);
        context.setState({
          accessToken: data,
          showToken: true
        })
      },
      error: function(error){
        console.log('err', error);
      }
    })
  }

  checkToken(accessToken){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/token',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        accessToken: accessToken
      }),
      success: function(data){
          if(data.length>0){
          context.setState({
            isLoggedIn: true,
            userCanEdit: false,
            items: data
          })
        }
      },
      error: function(error){
        console.log('err', error);
      }
    })
  }

  addList(list){
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/lists/add',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        list: list,
        user_id: this.state.user_id
      }),
      success: function(data){
        console.log('successful ajax in add list', data);
        if(data.length>0){
          context.setState({
            lists: data.lists
          })
        }
      },
      error: function(err){
        console.log('addList error', err);
      }
    })
  }

  delete( message_id ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/items/remove',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        message_id: message_id
      }),
      success: function(data) {
        context.get();
      },
      error: (function(err) {
        console.log('error in deletion', err); })
    })
  }

  get() {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        id: this.state.user_id
      }),
      success: (data) => {
        context.setState({
          items: data.reverse()
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  signup( username, password ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/signup',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id,
          connectFirstDevice: true,
          username
        });
      context.get(context.state.user_id);
      },
      error: function(error){
        console.log(error);
      }
    })
  }

  login( username, password ) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      success: function(data) {
        context.setState({
          isLoggedIn: true,
          user_id: data.user_id,
          username
        });
        context.get(context.state.user_id);
      },
      error: function(error, data) {
        context.setState({
          invalidUserPass: true
        })
      }
    })
  }

  search (term) {
    var context = this;
    $.ajax({
      url: 'http://localhost:3000/items/users',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        term: term,
        id: this.state.user_id
      }),
      success: function(data) {
        context.setState({
          items: data.reverse()
        });
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }

  render () {
    if(this.state.isLoggedIn){
    return (
      <MuiThemeProvider>
        <div>
          <Portal
            username={this.state.username}
            user_id={this.state.user_id}
            handleLogout={this.handleLogout}
            handleTokenChange={this.handleTokenChange}
            handleEmailSubmit={this.handleEmailSubmit}
            handleSenderEmail={this.handleSenderEmail}
            handleEmailSubmit={this.handleEmailSubmit}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            items={this.state.items}
            delete={this.delete}
            search={this.search}
            lists={this.state.lists}
            addList={this.addList}
            connectFirstDevice={this.state.connectFirstDevice}
            completeWhiz={this.completeWhiz}
            handleOpenMenu={this.handleOpenMenu}
            openMenu={this.state.openMenu}
            portalIndex={this.state.portalIndex}
            changePortalIndex={this.changePortalIndex}
            wantsWizard={this.wantsWizard}
            devices={this.state.devices}
            portalBottomNavTabIndex={this.state.portalBottomNavTabIndex}
            setDevice={this.setDevice}
            currentDevice={this.state.currentDevice}
            device_id={this.state.device_id}
            device_name={this.state.device_name}
            handlePortalBottomNavChange={this.props.handlePortalBottomNavChange}
            getDevices={this.getDevices}
          />
        </div>
      </MuiThemeProvider>
      )
    } else if (this.state.wantsSignupModal) {
      return (
       <MuiThemeProvider>
        <div>
          <SignupModal
            handleModalExit={this.handleModalExit}
            signup={this.signup}
            handleLogout={this.handleLogout}
          />
          <h2>hello</h2>
        </div>
      </MuiThemeProvider>)
    } else {

      const style = {
        height: '100%',
        width: '100vw',
        textAlign: 'center',
        display: 'inline-block',
      };

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleLoginPortalClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onClick={this.handleLoginPortalClose}
        />,
      ];

      return (

      <MuiThemeProvider>
        <div>
          <div className='welcomeGrid'>
           {/*
           <Header
              invalidUserPass={this.state.invalidUserPass}
              login={this.login}
              isLoggedIn={this.state.isLoggedIn}
              wantsSignupModal={this.wantsSignupModal}
              signup={this.signup}
            />

           */}
            <div id="welcomeHeaderLeft">
              <MagicMenu
                isLoggedIn={this.state.isLoggedIn}
              />

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

               {/* TODO ADD CHEVRONS FOR MAIN TOPIC PANELS: BT, THREAD, LoRa, Product Promo

                <div id='welcomeBannerLeftArrow'>
                  <LeftChevron />
                </div>
                <div id='welcomeBannerRightArrow'>
                <RightChevron />
                </div>
                <div id='welcomeBannerDownArrow'>
                <Down />
              </div>
               <div className="welcomeFooter">
               </div>
               */}
            </div>
          </div>
        </MuiThemeProvider>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))