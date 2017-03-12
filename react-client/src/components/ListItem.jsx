import React from 'react';

const ListItem = (props) => (
  <div className='item' >

    <h4>{ props.item.name }</h4>
    <p>{ props.item.message }</p>
  </div>
)

export default ListItem;