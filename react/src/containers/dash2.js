import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      // devices: [],
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
      <div className='dashboardWrapper'>
        <input className="dashboardDash" type='button' value='Setup Wizard' value='wizard' onClick={this.handleWantsWizard}/>
        <iframe
          className="dashboardMap"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB__lRKL0P6SD3rq-j0ezp1YCN3jiNC04g
            &q=2517+Virginia,SF+CA">
        </iframe>
      </div>
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



        // <div className='dashboardHeaderContent'>
        //   <div className='dashboxThirds'>
        //     <Paper zDepth={2} className="dashboardPaper">
        //       <h1>Hey {this.props.username}</h1>
        //     </Paper>
        //     <Paper zDepth={2} className="dashboardPaper">
        //       <p> schedule jobs, create notifications, make distribute your workload to remote sensors and systems.  Make your life easier, more productive, happier, and more satisfied with Node 360. </p>

        //       <h1>{this.props.devices}</h1>
        //       <h2>  Gateways </h2>

        //     </Paper>
        //     <Paper zDepth={2} className="dashboardPaper">
        //       <h1>{this.state.healthScore}</h1>
        //       <h2>  Health Check </h2>
        //     </Paper>
        //   </div>
        // </div>

        // <div className='dashboardHeaderContent'>
        //   <div className='dashboxThirds'>
        //     <Paper zDepth={2} className="dashboardPaper">
        //     </Paper>

        //     <Paper zDepth={2} className="dashboardPaper">
        //       <input type='button' value='Start Wizard' onClick={this.handleWantsWizard}/>
        //     </Paper>

        //     <Paper zDepth={2} className="dashboardPaper">
        //       <input type='button' value='Start Wizard' onClick={this.handleWantsWizard}/>
        //     </Paper>
        //   </div>

        // </div>







