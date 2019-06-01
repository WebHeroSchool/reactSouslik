import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'проснуться';

const App = () => ( <div>
  <h1>Список дел</h1>
  <InputItem />
  <ItemList todoItem = { todoItem } />
  <Footer />
</div> );

export default App;