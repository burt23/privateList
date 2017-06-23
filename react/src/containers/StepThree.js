import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nfcStatus: 'ready',
      device_lat: '',
      device_long: '',
      user_input_device_name: ''
    }
    // bind
    this.handleClick = this.handleClick.bind(this);
    this.scanGPS = this.scanGPS.bind(this);
    this.editDeviceName = this.editDeviceName.bind(this);
    this.saveDevice = this.saveDevice.bind(this);
  }

  editDeviceName(e){
    console.log('new device name: ', e.target.value)
    this.setState({
      user_input_device_name: e.target.value
    })
  }

  componentDidMount(){
    console.log('inside componentDidMount for step three, bout to launch nfc')
    // this.scanGPS()
  }

  scanGPS() {
    console.log('starting NFC');
    const context = this;

    navigator.geolocation.getCurrentPosition((position, error) => {
      console.log('getCurrentPosition callback => position:', position)
      console.log('getCurrentPosition callback => error:', error)
      console.log('getCurrentPosition callback => this.props.device_id:', this.props.device_id)
      console.log('getCurrentPosition callback => position.coords.latitude:', position.coords.latitude)
      console.log('getCurrentPosition callback => position.coords.longitude:', position.coords.longitude)

      context.setState({
        device_lat: position.coords.latitude,
        device_long:  position.coords.longitude,

        nfcStatus: 'complete'
      })

      const obj = {
        device_lat: position.coords.latitude,
        device_long:  position.coords.longitude,
      }

      this.props.setDevice(obj)

    })
 }


 saveDevice(e){

  if(this.state.user_input_device_name !== ''){
    const device_name = this.state.user_input_device_name || this.props.device_name
      console.log('device_name', device_name)
  }
      const init = {
        'method': 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          device_lat: this.state.device_lat || 'undefined',
          device_long: this.state.device_long || 'undefined',
          user_id: this.props.user_id,
          device_id: this.props.device_id,
          device_name: this.state.user_input_device_name || 'undefined'
        })
      }

      console.log('sending out the init', init);

      fetch('http://localhost:3000/wizard/gps', init)
        .then((res) => {
          console.log('fetch res', res)
          this.props.handleNext()
        })
        .catch((e) => {
          console.log('fetch e', e);
        })
    }

  handleClick(e){
    // e.preventDefault()
    console.log('inside handle click', e);


    if(e === 'finish') {
      this.saveDevice();
    } else if (e === 'back') {
      this.props.handlePrev()
    }
  }

  render() {
    return(
    <div>

    <form onSubmit={this.saveDevice}>
      <div>
        <label>device_name</label>
        <input placeholder={this.props.device_name} value={this.state.user_input_device_name} onChange={this.editDeviceName}>
        </input>
      </div>
      <div>
        <label>device_id</label>
        <input value={this.props.device_id} on></input>
      </div>
      <div>
        <label>device_lat</label>
        <input value={this.state.device_lat}></input>
      </div>
      <div>
        <label>device_long</label>
        <input value={this.state.device_long}></input>
      </div>
      <div>
      <input type='button' value='allowGPS' onClick={this.scanGPS} />
      </div>
    </form>


    <h3 className="wizardHeadliner">Schedule Events</h3>
      <p>
       Here's where things get fun, now we can make these tools do work for use to save precious time, energy, and to make our lives better.  Set devices to turn on at set intervals throughout the day, or based off of custom triggers based on which device enters that particular region of the network.
      </p>
      <br />
      <RaisedButton
        label={'Back'}
        primary={true}
        onClick={()=>this.handleClick('back')}
      />
      <RaisedButton
        label={'Finish'}
        primary={true}
        onClick={()=>this.handleClick('finish')}
      />
    </div>
    )
  }
}

export default StepThree;