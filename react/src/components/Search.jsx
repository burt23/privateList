import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if(this.state.value.length > 0){
      this.props.search(this.state.value);
    }
    event.preventDefault();
    this.setState({ value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return(
    <div id='searchBar'>

      <form id='searchForm' className='portalTopBarFlexbox' onSubmit={this.handleSubmit}>
        <input id='searchBox' className='portalTopBarFlexItem' type='text' placeholder='create new message' value={this.state.value} onChange={this.handleChange}/>
        <input type='submit' value='Submit' className='portalTopBarFlexItem portalTopBarFlexItemRight' />
      </form>
    </div>
    )
  }
}

export default Search;