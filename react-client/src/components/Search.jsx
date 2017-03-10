import React from 'react';

const Search = (props) => (
  <div id='searchBar'>
    <h3>search away kids</h3>
    <form id='searchForm'>
      <label>
      <input type='text' defaultValue='search away kids'/>
      <input type='submit' value='Submit' id='submitButton'/>
      </label>
    </form>
  </div>
  )
export default Search;