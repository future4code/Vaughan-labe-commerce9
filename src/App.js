import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Carrinho from './components/Carrinho/Carrinho';
import Filtros from './components/Filtros/Filtros';

class App extends React.Component {

  render() {
    return (
      <div>
        <Main/>
      </div> 
    )
  }
}
export default App;
