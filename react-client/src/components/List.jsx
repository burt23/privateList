import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> TOP SONGS </h4>
    <p>There are <span id='songTotal'> { props.songs.length }</span> songs.</p>
    { props.songs.map(song => <ListItem song={song}/>)}
  </div>
)

export default List;