import { Component } from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      {id: 1, name: 'United States', count: 0},
      {id: 2, name: 'China', count: 0},
      {id: 3, name: 'Germany', count: 0},
    ]
  }
  handleClick = (countryId) => {
    this.setState( prevState => ({
      countries: prevState.countries.map(
        el => el.id === countryId? { ...el, count: (el.count +1)}: el
      )
    }))
}
 render() {
  return (
    <div className="App"> 
        <header>
          Medal Count
        </header>
        { this.state.countries.map(country =>
          <Country
            key={ country.id }
            country={ country } 
            onClick={ this.handleClick }/>
            )}
      </div>
    );  
  }
}

export default App;
