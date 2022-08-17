import React, { Component } from 'react';

class Country extends Component {
    state = {
        name: 'USA',
        count: 0,
    }
    handleClick = () => {
        this.oldCount = this.state.count;
        this.newCount = this.oldCount + 1;
        this.setState({ count: this.newCount})
    }
    render() {
        return (
            <div className='Country'>
                 <div>   {this.state.name}  </div>
                 <div>Gold medals: {this.state.count}</div> <button onClick={ this.handleClick }> + </button>
            </div>
        )
    }
}

export default Country;