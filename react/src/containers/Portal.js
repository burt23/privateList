import React from 'react';
import Lists from './Lists.js';
import Messages from './Messages.js';
import PortalTopBar from './PortalTopBar.js';

class Portal extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    // bind functions
  }

  render(){
    return(
      <div>
        {/*****************  TOP APP BAR  ******************/}
        <div className='portalFlexboxTopBar'>
           <div className='portalFlexItemTopBar'>
             <PortalTopBar search={this.props.search}/>
          </div>
        </div>
        {/*****************  PORTAL FLEXBOX  ******************/}
        <div className='portalFlexbox'>
          {/*****************  PORTAL LEFT SIDE  ******************/}
          <div className='portalFlexItem portalFlexItemLeft'>
            <Lists
              lists={this.props.lists}
              addList={this.props.addList}
            />
          </div>
          {/*****************  PORTAL RIGHT SIDE  ******************/}
          <div className='portalFlexItem portalFlexItemRight'>
            <Messages
              items={this.props.items}
              delete={this.props.delete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Portal;