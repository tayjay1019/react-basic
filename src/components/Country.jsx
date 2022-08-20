import React, { Component } from 'react';

class Country extends Component {
    render() {
        const { onClick, country } = this.props;
        return (
            <div className='Country'>
                 <div>   {country.name}  </div>
                 <div>Gold medals: {country.count} <button onClick={ () => onClick(country.id) }> + </button></div> 
            </div>
        )
    }
}

export default Country;