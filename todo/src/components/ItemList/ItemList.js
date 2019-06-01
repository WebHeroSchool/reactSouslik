import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => ( <ul>
  <li>
    <Item todoItem = { todoItem } />
  </li>
  <li>
    <Item todoItem = { "умыться" } />
  </li>
  <li>
    <Item todoItem = { "побриться" } />
  </li>
  <li>
    <Item todoItem = { "наступить на кота" } />
  </li>
  <li>
    <Item todoItem = { "с женой поругаться" } />
  </li>
</ul>);

export default ItemList;