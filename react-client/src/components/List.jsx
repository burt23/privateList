import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> TOP items </h4>
    <p>There are <span id='songTotal'> { props.items.length }</span> items.</p>
    { console.log('stateINSIDE LIST', props.items) }
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;