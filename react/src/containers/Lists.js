import React from 'react';

class Lists extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    // bind functions
  }

  render(){
    return(
      <div className='listsFlexbox'>
        <div className='listsFlexItem'>
          <h2> lots of lists </h2>
        </div>
        <div className='listsFlexItem'>
          <h2> lots of lists </h2>
        </div>
        <div className='listsFlexItem'>
          <h2> lots of lists </h2>
        </div>
      </div>
    )
  }
}

export default Lists;