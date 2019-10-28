import React, {Component} from 'react';

import './App.css';

import Conversor from "./components/Conversor"

class App extends Component {
  render() { 
    return (
      <div className="Tudo">
        <div className="App">
          <h1>Conversor de Moedas</h1>
          <div className="linha1">
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          </div>
          <div className="linha2">
            <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
            <Conversor moedaA="KWD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BHD" moedaB="BRL"></Conversor>
          </div>
          <div className="linha3">
            <Conversor moedaA="OMR" moedaB="BRL"></Conversor>
            <Conversor moedaA="JOD" moedaB="BRL"></Conversor>
            <Conversor moedaA="KYD" moedaB="BRL"></Conversor>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
