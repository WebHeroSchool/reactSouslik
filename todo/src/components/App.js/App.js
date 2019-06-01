import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {

  const items = [
    { value : 'проснуться' },
    { value : 'побриться' },
    { value : 'наступить на кота' },
    { value : 'с женой поругаться' }
  ];
  

  return (
    <div>
      <h1>Список дел</h1>
      <InputItem />
      <ItemList items = { items } />
      <Footer />
    </div>
  );
} 

export default App;