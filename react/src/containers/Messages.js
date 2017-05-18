import React from 'react';
import ListItem from '../components/ListItem.jsx';

const Messages = (props) => {
  return(
  <div className='messagesFlexbox'>
    { props.items!==0 ? (props.items.map(item =>
      <ListItem
        className='messagesFlexItem'
        delete={props.delete}
        key={item.id}
        item={item}
      />
    )) : (<h2>Looks like you haven't created any messages yet, get busy!</h2>) }
  </div>
  )
}

export default Messages;
