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
      <div className = 'container'>
        <div className='item' >
          <p className='message'>{ this.props.item.message }</p>
          <div className = 'messageControls'>
            <div className ='editButton'>
              <button>edit</button>
            </div>
            <div className = 'deleteButton'>
              <button onClick={this.handleDelete}>delete</button>
            </div>
          </div>
          <TimeAgo className='timeStamp' date={time} />
        </div>
      </div>
      )
    }

  }




export default ListItem;