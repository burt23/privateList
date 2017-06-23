import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      devices: [],
      healthScore: 89
    }
    this.handleWantsWizard = this.handleWantsWizard.bind(this)

  }

  componentWillMount(){
    console.log('inside componentWillMount');
    const context = this;

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user_id
      })
    }

    // fetch('http://localhost:3000/portal/init', init)
    //   .then( (data) => data.json() )
    //   .then( (devices) => {
    //     console.log('made it backg from portal fetch', devices);
    //     context.setState({
    //       devices
    //     })
    //   })
    //   .catch((error)=>{
    //     console.log('error from fetch portal init', error)
    //   })


  }
  handleWantsWizard(event){
    console.log('toggleingWizard');
    this.props.wantsWizard();
  }

  render() {

    return (
      <span id='dashboard'>

      <main>
        <div data-grid="grid-header">
          <h1>Welcome  {this.props.username} to 3sixty</h1>
          <h2>Your Connected World</h2>
          <div className='bannerScore'>
            <h1>
              {this.state.healthScore}
            </h1>
          </div>
          <h2>
            Health Check
          </h2>
          <p>
            Optimize network conditions by periodically running through the health check to keep your system at peak performance.
            </p>
        </div>
        <div data-grid="grid-right-header">3</div>








        <div id="dashboardCenterGrid" data-grid="grid-area">
          <div className="dashboardCenterGridVerticalNote">
            <Paper zDepth={2}>
              <div className="">
                <div>
                  <h1>{this.props.devices.length}</h1>
                </div>
                <h2> Total Devices </h2>
                <p> These are all the devices on your network, you can dig in for furture details and schedule jobs, alters, and notifications for each. </p>
              </div>
            </Paper>
          </div>
        <div className="dashboardCenterGridVerticalNote">
          <Paper zDepth={2}>
            <div className="">
              <div>
                <h1>{this.props.devices.length}</h1>
              </div>
              <h2>
                Gateways
              </h2>
              <p>
                The workhorses of the NODE360, the gateways.  This is what you'll connect with your phone to get out to the internet, or to attach to a wifi router.
              </p>
            </div>
          </Paper>

        </div>
        <div className="dashboardCenterGridVerticalNote">
          <Paper zDepth={2}>
            <div className="">
          <p><strong>Grid Area</strong> It looks like you haven't registered any gateways yet. Let's get you started setting up with our wizard!</p>
          <input type='button' value='Start Wizard' onClick={this.handleWantsWizard}/>
          <p>on second though I'm comfortable setting this thing up manually, poweruser style</p>

          <input type='button' value='Custom Install'/>
        */}
            </div>
          </Paper>
        </div>
        <div id="dashboardCenterGridMap">
          <iframe
            frameBorder="0"

            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB__lRKL0P6SD3rq-j0ezp1YCN3jiNC04g
              &q=2517+Virginia,SF+CA" allowFullscreen>
          </iframe>
        </div>

        {/*




        </div>



        <div data-grid="grid-cell">
          <p><h1><strong>92/100</strong></h1>Congradulations, your entire fleet received full marks in all our tests, and you my friend can rest assured knowing your cloud solutions are safe with 3sixty ;D</p>
        </div>
        <div data-grid="grid-cell-right-action">
          <h2>Create Job</h2>
        </div>
        <div data-grid="grid-cell-right-action">
          <h2>Buy</h2>

        </div>
        <div data-grid="grid-row">12
          <p><strong>Grid Track (Row)</strong> A grid track is the space between two adjacent grid lines, forming a grid column or grid row.</p>
        </div>
      </main>

      </span>
    )
  }
}

export default Dashboard;



        // <div data-grid="grid-left-header">1</div>
        // <div data-grid="grid-column">4
        //   <p><strong>Active Gateways</strong> vertical icon placement for active nodes, can register a simple pic for each gateway with color coded health score</p>
        // </div>

        // <div data-grid="grid-column-mid-left">

        // <h1>24</h1>total devices connected
        // <h1>3</h1>active devices
        // <h1>21</h1>sleeping devices


        // </div>
        // <div data-grid="grid-cell-left-action">
        //   <h2>Setup Wizard</h2>
        // </div>
        // <div data-grid="grid-cell-left-action">
        //   <h2>Manage Cloud</h2>
        // </div>
