import React from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsNewList: false,
      listTitle: ''
    };
    // bind functions
    this.handleWantsNewList = this.handleWantsNewList.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
    this.handleListTitleChange = this.handleListTitleChange.bind(this);
  }

  componentDidMount() {
   console.log('you have 0 lists', this.props.lists.length);
   console.log('you have lists', this.props.lists);
  }

  handleListSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('inside list submit', this.state.listTitle);
    this.props.addList(this.state.listTitle);
    this.setState({
      listTitle: ''
    });
  }

  handleWantsNewList(event) {
    console.log('wants new list', event);
    this.setState({
      wantsNewList: true
    });
  }

  handleListTitleChange(event) {
    console.log('list', event);
    this.setState({
      listTitle: event.target.value
    });
  }

  render() {
    return (
      <div className="listsFlexbox">
        <h1>You have {this.props.lists.length} lists</h1>
        <form onSubmit={this.handleListSubmit}>
          <input
            type="text"
            placeholder="title"
            value={this.state.listTitle}
            onChange={this.handleListTitleChange} 
          />
          <input
            type="submit"
            onClick={this.handleWantsNewList}
            value="Create New List"
          />
        </form>

        { this.props.lists !== 0 &&
          
          (this.props.lists.map(list =>
            <p
              className="listsFlexlist"
              key={list.id}
              list={list}
            />
          )) 
        }

        <ul>
          {this.props.lists.map(list => (
            <li key={list.time}>{list}</li>))}
        </ul>
      </div>
    );
  }
}

export default Lists;
