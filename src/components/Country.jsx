import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {
  getMedalsTotal(country, medals) {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }
  render() { 
    const { country, medals, onIncrement, onDecrement } = this.props;
    return (
      <div className="country">
        <div className="name">
          { country.name }
          <span className="badge">
            { this.getMedalsTotal(country, medals) }
          </span>
        </div>
        { medals.map(medal =>
          <Medal 
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            onIncrement={ onIncrement } 
            onDecrement={ onDecrement } />
        ) }
        <hr />
      </div>
    );
  }
}

export default Country;