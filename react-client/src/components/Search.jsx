import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  console.log('inside search', this);
  }

  handleSubmit(event) {
    console.log('this', this);
    this.props.search(this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
    <div id='searchBar'>
      <h3>search tunes</h3>
      <form id='searchForm' onSubmit={this.handleSubmit}>
        <label>
          <input id='searchBox' type='text' placeholder='search away kids' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type='submit' value='Submit' id='submitButton'/>
      </form>
    </div>
    )
  }
}

export default Search;