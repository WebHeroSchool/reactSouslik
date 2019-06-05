import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; //модуль-стили подключаются в своем компоненте

const App= () => {

  const items=[
    { 
      value : 'проснуться',
      isDone: true
    },
    { 
      value : 'побриться',
      isDone: false
    },
    {
      value : 'наступить на кота',
      isDone: true
    },
    {
      value : 'с женой поругаться',
      isDone: false
    }
  ];

  let isMany= false;

  return (
    <div className={ styles.todo }>
      <h1 className={ styles.title }>Список дел</h1>
      <InputItem />
      <ItemList items={ items } />
      <Footer count={ isMany } />
    </div>
  );
} 

export default App;