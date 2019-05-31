import React from 'react';
import logo from './logo.svg';
import './App.css';

import { n, l } from './numbers';//заимпортировал из файла по пути..
import { count } from './numbers';
import * as nums from './numbers';//импорт всех файлов из заданного модуля

console.log( nums.n, nums.l, nums.count);


let now = new Date();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>выведем текущеe время: 
          {now.toString().substring(16, 25)}
        </p>

        <p>
           test1 number: { n },
        </p>
        <p>
          test2 letter: { l };
        </p>
        <p>
          test3 { count }
        </p>

      </header>
    </div>
  );
}

export default App;
