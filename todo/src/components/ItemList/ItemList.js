import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../Item/Item';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList= ({ items }) => ( <ul>
  { items.map( item => (
    <li key= { item.value }>
      <Item value= { item.value } isDone= { item.isDone } />

      <Checkbox
        value="checked"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      
    </li>
  ))}
</ul>);

export default ItemList;