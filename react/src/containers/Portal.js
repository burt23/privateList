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
      <section id="portal">
        <header>Header</header>
        <nav>Navigation</nav>
        <main>Main area</main>
        <footer>Footer</footer>
      </section>
    )
  }
}

export default Portal;
            // <Messages
            //   items={this.props.items}
            //   delete={this.props.delete}
            // />
            //  <PortalTopBar search={this.props.search}/>
            // <Lists
            //   lists={this.props.lists}
            //   addList={this.props.addList}
            // />