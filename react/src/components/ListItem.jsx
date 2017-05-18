import React from 'react';
import TimeAgo from 'react-timeago';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    console.log('clickedDelte');
    console.log('clickedDelte', this.props.item.id);
    this.props.delete(this.props.item.id);
  }

  render(){
    var time = this.props.item.time;

    return (
        <div className='listItemFlexbox' >

          {/*  LEFT CONTROLS */}
          <div className='listItemFlexItem listItemFlexItemLeft'>

            <div className='listMessageControlsVertFlexbox'>

              <div className='listMessageControlsVertFlexItem'>
                <p className='message'>Owner</p>
              </div>

              <div className='listMessageControlsVertFlexItem'>
                <TimeAgo className='timeStamp' date={time} />
              </div>

            </div>

          </div>

          {/*  MESSAGE CONTENT */}
          <div className = 'listItemFlexItem listItemFlexItem'>
            <p className='message'>{ this.props.item.message }</p>
          </div>

          {/*  RIGHT CONTROLS */}
          <div className='listItemFlexItem listItemFlexItemRight'>

            <div className='listMessageControlsVertFlexbox'>

            <div className ='listMessageControlsVertFlexItem editButton'>
              <p className='message'>{ this.props.item.message }</p>
            </div>

            <div className = 'listMessageControlsVertFlexItem deleteButton'>
              <button>edit</button>
              <button onClick={this.handleDelete}>delete</button>
            </div>

          </div>

        </div>

      </div>
      )
    }

  }




export default ListItem;