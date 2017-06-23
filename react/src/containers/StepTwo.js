import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';


class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successfullyPaired: false,
      successfulScan: false,
      scanStatus: 'scan',
      device_id: '',
      device_name: '',
      savedDevice: false,
      userWantsPairing: false
    }
    // bind
    this.handleClick = this.handleClick.bind(this);
    this.scanBluetooth = this.scanBluetooth.bind(this);
    this.scanNFC = this.scanNFC.bind(this);
    this.scanGPS = this.scanGPS.bind(this);
  }


  componentDidMount(){
    console.log('inititing authentication scanning');
    // scan for bluteooth
    this.scanBluetooth();
    // scan for nfc
    this.scanNFC();


  }

  handleClick(e){
    console.log('inside handle click', e);

    if (e === 'back') {
      this.props.handlePrev(this.props.connectionType)
    } else if (e === 'next') {
      this.props.handleNext(this.props.connectionType)
    } else if (e === 'stepBack') {
      this.setState({
        scanStatus: 'scan'
      })
    }
  }

  scanNFC(e){
    console.log('scanning nfc');

  }

  scanGPS(e){
    console.log('scanning gps lock');

    }

  scanBluetooth(e){
    console.log('scanning for bluetooth devices')
    const context = this;
    context.setState({
      userWantsPairing: true
    })

    String.prototype.convertToHex = function (byte) {
        return this.split("").map(function(c) {
            return ("0" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(byte || "");
    };

    let options = {
      // filters: [
      //   {services: ['heart_rate']},
      //   {services: [0x1802, 0x1803]},
      //   {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
      //   {name: 'ExampleName'},
      //   {namePrefix: 'Prefix'}
      // ],
      acceptAllDevices: true,
      optionalServices: ['battery_service']
    }

    navigator.bluetooth.requestDevice(options)
      .then((device) => {
        console.log('Device: ' + device);
        console.log('Device: ',  device);
        console.log('Name: ' + device.name);
        const uuid = device.id.convertToHex();
        console.log('Name: ' + uuid);

        // Do something with the device.
        context.setState({
          device_id: uuid,
          device_name: device.name,
          scanStatus: 'paired',
        })

        // create obj to send over device information
        const obj = {
          device_id: uuid,
          device_name: device.name
        }

        console.log('setting device', obj)
        // call setter function with relavent data
        this.props.setDevice(obj)

        this.setState({
          savedDevice: true
        })

       //  const init = {

       //    method: 'POST',
       //    headers: {
       //      'Content-Type': 'application/json'
       //    },
       //    body: JSON.stringify({
       //      device_name: device.name,
       //      device_id: uuid,
       //      user_id: this.props.user_id
       //    })
       //  }
       //  console.log('bout to fetch this shit');



       // fetch( 'http://localhost:3000/wizard/psych', init)
       //   .then((data)=>{
       //      console.log('response from fetch', data)

       //      context.setState({
       //        savedDevice: true
       //      })
       //  })
      })

    .catch(function(error) {
      console.log("Something went wrong. " + error);
      context.setState({
        userWantsPairing: false
      })
    });
  }

  render() {
    if (this.props.connectionType === 'bt') {
      if (this.state.scanStatus === 'paired') {
        return(
          <div>
            <h1> Connected to {this.state.device_name} </h1>
            <h3>Device ID: {this.state.device_id} </h3>
            <br />
            <RaisedButton
              label={'Back'}
              primary={true}
              onClick={()=>this.handleClick('stepBack')}
            />
            <RaisedButton
              label={'Next'}
              primary={true}
              onClick={()=>this.handleClick('next')}
            />
          </div>
          )
      } else if (this.state.scanStatus === 'scan') {
      return(
        <div>
          <h3 className="wizardHeadliner">Scanning for Devices</h3>
           { this.state.userWantsPairing &&
            <span>
              <CircularProgress size={80} thickness={5} />
            </span>
          }
          <div className='lowerThird'>
           {!this.state.userWantsPairing &&
            <RaisedButton
              label={'Scan'}
              primary={true}
              onClick={()=>this.scanBluetooth()}
            />
           }
            <RaisedButton
              label={'Back'}
              primary={true}
              onClick={()=>this.handleClick('back')}
            />
            <RaisedButton
              label={'Next'}
              primary={true}
              onClick={()=>this.handleClick('next')}
            />
          </div>
        </div>
        )
      }
    } else if (this.props.connectionType === 'nfc') {
      return (
        <div>
          <h3 className="wizardHeadliner">Ready to Pair</h3>
          <h4> Device NFC Support: 2.0.1: </h4>
          <iframe src="https://giphy.com/embed/8bvq0VLRbnkWc" width="480" height="300" frameBorder="0"></iframe>
          <br />
          <RaisedButton
            label={'Back'}
            primary={true}
            onClick={()=>this.handleClick('back')}
          />
          <RaisedButton
            label={'Next'}
            primary={true}
            onClick={()=>this.handleClick('next')}
          />
        </div>
      )
    } else return (<h1> oooooops! </h1>)
  }
}

export default StepTwo;
