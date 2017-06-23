import React from 'react';
import Menu from 'material-ui/svg-icons/image/blur-on.js';
import IconButton from 'material-ui/IconButton';

class welcomeLogin extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }

  }


  render() {
    return (

    <div>
     <IconButton
        iconStyle={{ color: 'white', 'width': '10vw', height: '10vh'}}
     >
        <Menu

        />
      </IconButton>
    </div>


    )
  }
}


export default welcomeLogin;
