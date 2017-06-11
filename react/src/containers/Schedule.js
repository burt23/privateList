import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Alarm from 'material-ui/svg-icons/action/alarm'
import Create from 'material-ui/svg-icons/content/create'
import Timeline from 'material-ui/svg-icons/action/timeline'


class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsActiveJobs: true,
      wantsCreateJobs: false,
      wantsAnalysis: false
    }
    //bind
     this.handleTabClick = this.handleTabClick.bind(this);
  }


  handleTabClick(e){
    console.log('inside tab click yeah label buddy',  e);
    if (e==='1') {
      this.setState({
        wantsActiveJobs: true,
        wantsCreateJobs: false,
        wantsAnalysis: false
      })
    }  if (e==='2') {
      this.setState({
        wantsActiveJobs: false,
        wantsCreateJobs: true,
        wantsAnalysis: false
      })
    } else if(e==='3'){
      this.setState({
        wantsActiveJobs: false,
        wantsCreateJobs: false,
        wantsAnalysis: true
      })
    }
  }


  render() {
    if(this.state.wantsActiveJobs) {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >

              <Tab
                icon={<Alarm />}
                label="Active Jobs"
                onClick={ () => ( this.handleTabClick('1') )}
              />

              <Tab
                icon={<Create />}
                label="Create Jobs"
                onClick={ () => ( this.handleTabClick('2') )}
              />

              <Tab
                icon={<Timeline />}
                label="Analysis"
                onClick={ () => ( this.handleTabClick('3'))}
              />

            </Tabs>
          </div>
          <div>
            <h1> Active Schedule </h1>
          </div>
        </div>
        )
      } else if (this.state.wantsCreateJobs) {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >
                <Tab
                icon={<Alarm />}
              label="Active Jobs"
                onClick={ () => ( this.handleTabClick('1') )}
              />
              <Tab
                icon={<Create />}
                label="Create Jobs"
                onClick={ () => ( this.handleTabClick('2') )}
              />
              <Tab
                icon={<Timeline />}
                label="Analysis"
                onClick={ () => ( this.handleTabClick('3'))}
              />
            </Tabs>
          </div>
          <div>
            <h1> Create Jobs </h1>
          </div>
        </div>

        )
      } else  {
      return (
        <div>
          <div>
            <Tabs className='portalTabs' >
                <Tab
                icon={<Alarm />}
              label="Active Jobs"
                onClick={ () => ( this.handleTabClick('1') )}
              />
              <Tab
                icon={<Create />}
                label="Create Jobs"
                onClick={ () => ( this.handleTabClick('2') )}
              />
              <Tab
                icon={<Timeline />}
                label="Analysis"
                onClick={ () => ( this.handleTabClick('3'))}
              />
            </Tabs>
          </div>
          <div>
            <h1> Analysis </h1>
          </div>
        </div>
        )
      }
    }
  }

export default Schedule;
