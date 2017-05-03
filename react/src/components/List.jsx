import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> TOP items </h4>
    <div className = 'selectList'>
      <select>
        <option value='value1' defaultValue>Select List</option>
        <option value='value2'>Create New List</option>
      </select>
    </div>
    <div>
      <p>There are <span id='songTotal'> { props.items.length }</span> items.</p>
    </div>
    { props.items.map(item => <ListItem delete={props.delete} key={item.id} item={item}/>)}
  </div>
)

export default List;