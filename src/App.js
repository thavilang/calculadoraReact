import React from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = React.useState('0');
  const [diminuirDisplay, setDiminuirDisplay] = React.useState(false);

  function limpar(){
    setDisplay('0');
    setDiminuirDisplay(false);
  }

  function total(){
    let total = display.toString();
    total = eval(total);
    setDisplay(total);
    setDiminuirDisplay(total.length > 8 ? true : false);
  }

  function apagarCaracter(){
    if(display.length <= 1 || display.length == undefined){
      setDisplay('0');
    } else {
      setDisplay(display.substr(0, display.length - 1));
    }
    setDiminuirDisplay(display.length > 10 ? true : false);
  }

  function atualizarDisplay(caracter){
    if(display.length > 40){
      setDisplay('ERROR');
    } else if(display == 'ERROR' || display == '0'){
      setDisplay(caracter);
    } else {
      let displayAtual = display.toString();
      if(isNaN(displayAtual.charAt(display.length - 1)) && isNaN(caracter)){
        setDisplay(`${display.substr(0, display.length - 1)}${caracter}`);
      } else {
        setDisplay(`${display}${caracter}`);
      }
    }
    setDiminuirDisplay(display.length > 8 ? true : false);
  }

  let btnNumeros = [];
  for (let index = 9; index >= 0; index--) {
    if (index == 0){
      btnNumeros.push(<button onClick={() => atualizarDisplay('.')} key="10">,</button>);
    }
    btnNumeros.push(<button onClick={() => atualizarDisplay(index)} key={index}>{index}</button>);
  }

  let btnOperacoes = ['+', '-', '*', '/'];
  btnOperacoes = btnOperacoes.map((operacao, index) => <button onClick={() => atualizarDisplay(operacao)} key={index}>{operacao}</button>);

  return (
    <main className='calculadora'>
      <div className={diminuirDisplay ? 'display diminuir' : 'display'}>{display}</div>
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