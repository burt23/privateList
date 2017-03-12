import React from 'react';
import TimeAgo from 'react-timeago';



const ListItem = (props) => {

var time = props.item.time;


return (
  <div className='item' >

    <p>{ props.item.message }</p>
    <TimeAgo className='timeStamp' date={time} />
  </div>
  )
}

export default ListItem;