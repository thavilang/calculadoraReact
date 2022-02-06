import React from 'react';
import './App.css';

const App = () => {

  let limpar = () => document.getElementById('display').innerHTML = '';

  function mostrarDisplay(caracter) {
    let display = document.getElementById('display');

    if(isNaN(display.innerHTML.charAt(display.innerHTML.length - 1)) && isNaN(caracter)){
      apagarCaracter();
    }

    if (display.innerHTML == 'ERROR') {
      limpar();
    }

    let valorAtual = display.innerHTML;
    display.innerHTML = valorAtual + caracter;

    if (display.innerHTML.length > 8) {
      display.classList.add('diminuir');
    } else {
      display.classList.remove('diminuir');
    }

    if (display.innerHTML.length > 40) {
      limpar();
      mostrarDisplay('ERROR');
    }
  }

  function apagarCaracter(e){
    let display = document.getElementById('display').innerHTML;
    let valor = display.substr(0, display.length - 1);

    limpar();
    mostrarDisplay(valor);
  }

  function pegarCaracter(e) {
    let caracter = e.target.getAttribute('js-caracter');
    mostrarDisplay(caracter);
  }

  function total() {
    let display = document.getElementById('display').innerHTML;
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
      <div type="text" id='display' className='display'></div>
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