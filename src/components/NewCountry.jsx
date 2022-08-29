import React, { Component } from 'react';

class NewCountry extends Component {
  state = {  }
  handleClick = () => {
    const name = prompt('Enter country name');
    if (name && name.trim().length > 0) {
      this.props.onAdd(name);
    }
  }
  render() { 
    return (
      <div className='newCountryButton'>
        <button onClick={ this.handleClick }>New Country</button>
      </div>
    );
  }
}

export default NewCountry;
