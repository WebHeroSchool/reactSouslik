import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../Item/Item';

const ItemList= ({ items }) => ( <ul>
  { items.map( item => (
    <li key= { item.value }>
      <Item value= { item.value } isDone= { item.isDone } />
    </li>
  ))}
</ul>);

export default ItemList;