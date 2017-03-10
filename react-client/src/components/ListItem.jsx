import React from 'react';

const ListItem = (props) => (
  <div className='song' >

    <h4>{ props.song.name }</h4>
    <p>{ props.song.description }</p>
  </div>
)

export default ListItem;