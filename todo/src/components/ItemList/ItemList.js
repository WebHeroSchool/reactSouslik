import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ({ items, onClickDone }) => ( <ul className={styles.list}>
  { items.map(item => (
    <li key={item.value} className={styles.listItem}>
      <Item
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        id={item.id}
      />
      <Checkbox
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox'
        }}
      />
    </li>
  ))}
</ul>);

export default ItemList;