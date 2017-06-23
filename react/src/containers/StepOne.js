import React, { Component } from 'react';
import ActionNetwork from 'material-ui/svg-icons/device/wifi-tethering.js';
import IconButton from 'material-ui/IconButton';
import Bluetooth from 'material-ui/svg-icons/device/bluetooth.js'
import NFC from 'material-ui/svg-icons/device/nfc.js'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';




class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wirelessSelector: ''
    }
    // bind
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick(e){
    console.log('hello for the nth time', e);
    this.props.handleNext(e);
  }

  render() {
    const styles = {

      largeIcon: {
        width: 60,
        height: 60,
      },

      large: {
        width: 120,
        height: 120,
        padding: 30,
      },

      button: {
        margin: 12
      }
    };

    return(
      <div>
        <h3 className="wizardHeadliner"> Choose your connection method </h3>
        <div className='swTiles'>
          <div className='swTile'>
            <Paper className='paper' zDepth={2}>
              <div className='paperCol'>
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                >
                  <Bluetooth />
                </IconButton>
              </div>
              <h2 className='paperCol'>Bluetooth</h2>
                <p className='paperCol'>Bluetooth offers a fast and easy way to quickly add devices to your network.  Please note that Bluetooth pairing may not meet certain compliance requirements, and that it is less secure than NFC pairing.</p>
                <RaisedButton value="bt" onClick={()=>this.handleButtonClick('bt')} className='paperCol' label="Connect" primary={true} style={styles.button} />
            </Paper>
          </div>

          <div className='swTile'>
            <Paper className='paper'zDepth={2}>
              <div className='paperCol'>
                  <IconButton
                    iconStyle={styles.largeIcon}
                    style={styles.large}
                  >
                    <NFC />
                  </IconButton>
              </div>
              <h2 className ='paperCol'>
                NFC
              </h2>
              <p className='paperCol'>NFC offers the best of security and convenience.  Simply tap your smartphone to your 3sixty and the devices are configured automatically, and securely. Required for compliance in certain industries.</p>
                <RaisedButton
                  value="nfc"
                  onClick={()=>this.handleButtonClick('nfc')}
                  label="Connect"
                  primary={true}
                  style={styles.button}
                  className="paperCol"
                />
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default StepOne;
