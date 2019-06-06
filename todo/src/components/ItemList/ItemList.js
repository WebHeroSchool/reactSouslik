import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList=({ items }) => ( <ul className={ styles.list }>
  { items.map( item => (
    <li key={ item.value } className={ styles.listItem }>
      <div>
        <Checkbox
          value="checked"
          inputProps={{
            'aria-label': 'primary checkbox',
          }}
        />
        <Item value={ item.value } isDone={ item.isDone } />
      </div>
      <Checkbox
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
    </li>
  ))}
</ul>);

export default ItemList;