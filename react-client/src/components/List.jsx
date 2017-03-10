import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> TOP SONGS </h4>
    <p>There are { props.items.length } items.</p>
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;