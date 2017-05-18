import React from 'react';
import Search from '../components/Search.jsx'

class portalTopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    // bind functions
  }

  render(){
    return(
      <div>
        <Search search={this.props.search}/>
      </div>
    )
  }
}

export default portalTopBar;