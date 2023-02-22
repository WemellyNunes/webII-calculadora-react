import React, {useState} from 'react';
import './App.css';
import logo from './combustivel.png';

function App() {
  
  const [defaultGasolina, newGasolina] = useState(0);
  const [defaultEtanol, newEtanol] = useState(0);
  console.log()

  const calculadoraCombustivel = () => {

    let res = ""
    const result = defaultEtanol / defaultGasolina;
    let validacoes = true;

    if(!defaultGasolina || !defaultEtanol || defaultEtanol <= 0 || defaultGasolina <= 0){
      validacoes = false;
      res += "Está faltando o preenchimento de alguns campos ou os valores inseridos são inválidos para a realização do cálculo.\n"
    }
    
    if(validacoes){
      if(result < 0.7){
        res += `O cálculo será igual a ${result.toFixed(2)}. Portanto, compensa mais abastecer com álcool.`;
      }else{
        res += `O cálculo será igual a ${result.toFixed(2)}. Portanto, compensa mais abastecer com gasolina.`;
      }
    }
    alert(res);
  }

  return (
    <div className="app">
      <div className="content">
      <img src={logo} alt='Logo' title='Logo'></img>
      <div className='text'>
      <h2>Você sabe com qual combustível compensa mais abastecer seu carro?</h2>
      <h2>Utilize a calculadora abaixo:</h2>
      </div>
      <h2 className='titleInput'>Preço - litro etanol (R$):</h2>
      <input id="etanol" name="etanolInput" type="number" title='Insira o preço do etanol' value={defaultEtanol} onChange={e => newEtanol(e.target.value)}/>
      <h2 className='titleInput'>Preço - litro gasolina (R$):</h2>
      <input id="gasolina" name="gasolinaInput" type="number" title='Insira o preço da gasolina' value={defaultGasolina} onChange={e => newGasolina(e.target.value)}/>
      <br></br>
      <button onClick={calculadoraCombustivel}>Calcular</button>
      </div>
    </div>

  );
}

export default App;
