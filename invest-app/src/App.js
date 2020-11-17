import React from 'react';
import './App.css';
import Result from './component/Result';

class Home extends React.Component {
  constructor() {
    super()
    this.state={
      montante: 0,
      tempo: 0,
      aporte: 0,
      taxa: 0,
      click: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculator = this.handleCalculator.bind(this);
  }

  handleChange({ target }) {
    let nome = target.name
    let valor = target.value
    this.setState((prevState) => ({
      ...prevState,
      [nome]:valor,
      click: false,
      montante: 0,
    }));
  }

  handleCalculator() {
    let {
      montante,
      tempo,
      aporte,
      taxa 
    } = this.state;
    for(let i=0; i < tempo; i++){
      montante = (Number(montante) + Number(aporte) + (Number(montante) * Number(taxa) / 100)).toFixed(2)
      this.setState({
        montante: montante,
      });
    }
    this.setState({
      click: true,
    })
  }

  render() {
    const {
      montante,
      tempo,
      aporte,
      taxa,
      click } = this.state;
    return (
      <div className="App">
        <div className="square">
          <header className="App-header">
            <h1>Header</h1>
          </header>
          <div className="middle-content">
            <label>Montante Inicial:
              <input type="number" name="montante" onChange={this.handleChange} />
            </label>
            <label>Duração:
              <input type="number" name="tempo" onChange={this.handleChange} />
            </label>
            <label>Aporte/Mês:
              <input type="number" name="aporte" onChange={this.handleChange} />
            </label>
            <label>Taxa de Juros:
              <input type="number" name="taxa" onChange={this.handleChange} />
            </label>
          </div>
          <aside>
            {click ? 
              <Result montante={montante}/>
              :
              <button type="button" onClick={this.handleCalculator}>
              Investir!
            </button>
            }
          </aside>
        </div>
      </div>
    );
  }
}

export default Home;
