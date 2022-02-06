import React from 'react';
import './App.css';

const App = () => {

  let limpar = () => document.getElementsByName('display')[0].value = '';

  function mostrarDisplay(caracter) {
    let display = document.getElementsByName('display')[0];

    if(isNaN(display.value.charAt(display.value.length - 1)) && isNaN(caracter)){
      apagarCaracter();
    }

    if (display.value == 'ERROR') {
      limpar();
    }

    let valorAtual = display.value;
    display.value = valorAtual + caracter;

    if (display.value.length > 8) {
      limpar();
      mostrarDisplay('ERROR');
    }
  }

  function apagarCaracter(e){
    let display = document.getElementsByName('display')[0].value;
    let valor = display.substr(0, display.length - 1);

    limpar();
    mostrarDisplay(valor);
  }

  function pegarCaracter(e) {
    let caracter = e.target.getAttribute('js-caracter');
    mostrarDisplay(caracter);
  }

  function total() {
    let display = document.getElementsByName('display')[0].value;
    let total = eval(display);

    limpar();
    mostrarDisplay(total);
  }

  let btnNumeros = [];
  for (let index = 9; index >= 0; index--) {
    if (index == 0){
      btnNumeros.push(<button onClick={pegarCaracter} key="10" js-caracter=".">,</button>);
    }
    btnNumeros.push(<button onClick={pegarCaracter} key={index} js-caracter={index}>{index}</button>);
  }

  let btnOperacoes = ['+', '-', '*', '/'];
  btnOperacoes = btnOperacoes.map((operacao, index) => <button onClick={pegarCaracter} key={index} js-caracter={operacao}>{operacao}</button>);

  return (
    <main className='calculadora'>
      <input type="text" name="display" maxLength="8" readOnly placeholder='00000000000' />
      <div className='gridBotoes'>
        {btnNumeros}
        <button onClick={total}>=</button>
        <div className='linhaOperacoes'>
          <button onClick={limpar}>C</button>
          <button onClick={apagarCaracter}>⇤</button>
          {btnOperacoes}
        </div>
      </div>
    </main>
  );
}

export default App;