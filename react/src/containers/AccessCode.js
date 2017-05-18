import React from 'react';
import ReactDOM from 'react-dom';

class AccessToken extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: '',
    };
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleTokenSubmit = this.handleTokenSubmit.bind(this);
  }

  handleTokenSubmit(event) {
    console.log('inside token submit', this.state.accessToken);
    this.props.checkToken(this.state.accessToken);
    event.preventDefault();
    this.setState({ accessToken: '' });
  }

  handleTokenChange(event) {
    this.setState({ accessToken: event.target.value });
  }

  render () {
    return(
      <div>
          <form onSubmit={this.handleTokenSubmit} className='accessTokenFlexbox tokenForm'>
            <h4 className='accessTokenFlexItem'> Enter Access Token </h4>
            <input className='accessTokenField accessTokenFlexItem' type='text' value={this.state.accessToken} onChange={this.handleTokenChange} placeholder='Access Token'>
            </input>
          </form>
        </div>
    )
  }
}


export default AccessToken;