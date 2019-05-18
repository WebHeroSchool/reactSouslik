import React from 'react';
import logo from './logo.svg';
import './App.css';

let now = new Date();
const number = 50;
let logic = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p style = {{ 
          color: 'yellow',
          fontSize: number - 16
        }}>Выводим style</p>

        <p>выведем значение переменной, равной текущему времени:
          {now.toString().substring(16, 25)}
        </p>

        <p>выведем число :
          {number}
        </p>
        
        <p> {number} > 0 :
          {number > 0 ? ' да, это верно' : ' нет, это не верно'}
        </p>

        <p> арифметическое значение number + 505 =
          {number + 505}
        </p>

        <p> логическое значение logic = {logic}
          {logic && <div>is true</div>}
        </p>

        <p>
          {true}, {undefined}, {null}, {false}, {NaN}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
