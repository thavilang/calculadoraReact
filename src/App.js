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
    let conteudoDisplay = display.toString();
    conteudoDisplay = eval(conteudoDisplay);
    setDisplay(conteudoDisplay);
    conteudoDisplay = conteudoDisplay.toString();
    setDiminuirDisplay(conteudoDisplay.length > 8 ? true : false);
  }

  function apagarCaracter(){
    let conteudoDisplay = display.toString();
    if(conteudoDisplay.length <= 1 || conteudoDisplay.length == undefined){
      conteudoDisplay = '0';
    } else {
      conteudoDisplay = conteudoDisplay.substr(0, conteudoDisplay.length - 1);
    }
    setDisplay(conteudoDisplay);
    setDiminuirDisplay(conteudoDisplay.length > 8 ? true : false);
  }

  function atualizarDisplay(caracter){
    let conteudoDisplay = display.toString();
    if(conteudoDisplay.length > 40){
      conteudoDisplay = 'ERROR';
    } else if(conteudoDisplay == 'ERROR' || conteudoDisplay == '0'){
      conteudoDisplay = caracter;
    } else {
      if(isNaN(conteudoDisplay.charAt(conteudoDisplay.length - 1)) && isNaN(caracter)){
        conteudoDisplay = `${display.substr(0, display.length - 1)}${caracter}`;
      } else {
        conteudoDisplay = `${display}${caracter}`;
      }
    }
    setDisplay(conteudoDisplay);
    setDiminuirDisplay(conteudoDisplay.length > 8 ? true : false);
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