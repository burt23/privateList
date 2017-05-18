import React from 'react';

class portalTopBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    // bind functions
  }

  render(){
    return(
      <div className='portalTopBarFlexbox'>
        <div className='portalTopBarFlexItem'>
          <h2> Create </h2>
        </div>
        <div className='portalTopBarFlexItem'>
          <h2> Share </h2>
        </div>
        <div className='portalTopBarFlexItem'>
          <h2> Settings </h2>
        </div>
      </div>
    )
  }
}

export default portalTopBar;