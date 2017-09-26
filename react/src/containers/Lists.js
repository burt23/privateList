import React from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsNewList: false,
      listTitle: '',
    };
    // bind functions
    this.handleWantsNewList = this.handleWantsNewList.bind(this);
    this.handleListSubmit = this.handleListSubmit.bind(this);
    this.handleListTitleChange = this.handleListTitleChange.bind(this);
  }

  handleListSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('inside list submit', this.state.listTitle);
    this.props.addList(this.state.listTitle);
  }

  handleWantsNewList(event) {
    console.log('wants new list', event);
    this.setState({
      wantsNewList: true,
    });
  }

  handleListTitleChange(event) {
    console.log('list', event);
    this.setState({
      listTitle: event.target.value,
    });
  }

  render() {
    return (
      <div className="listsFlexbox">
        { this.state.wantsNewList &&

          <form onSubmit={this.handleListSubmit}>
            <input 
              type="text"
              placeholder="title"
              value={this.state.listTitle}
              onChange={this.handleListTitleChange}
            />
          </form>
        }
        { this.props.lists === 0 ? 
          (this.props.lists.map(list =>
            <p
              className="listsFlexlis"t
              delete={props.delete}
              key={list.id}
              list={list}
            />
          )) : (
            <h2
              onClick={this.handleWantsNewList}>
              Create New List
            </h2>
          )
        }
      </div>
    );
  }
}

export default Lists;
