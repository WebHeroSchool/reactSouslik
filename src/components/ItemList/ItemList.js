import React from 'react';
import Item from '../Item/Item';
import classnames from 'classnames';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete, id_0 }) => (<ul className={styles.list}>
  { items.map(item => (
    <li key={item.id} className={
      classnames({
        [styles.listItem]: true,
        [styles.isDouble]: item.isDouble,
        [styles.isHidden]: item.isHidden
      })}>
      <Item
        id={item.id}
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete} 
      />
      <div
        id_0={id_0}
        className= {
          classnames({
            [styles.hint]: true,
            [styles.isHidden]: !item.isDouble,
            [styles.hintUp]: true,
            [styles.hintDown]: item.id === id_0
          })
        }>
        <p className={
          classnames({
            [styles.hintText]: true            
          })}>Такое задание уже есть в нашем списке. Введите другое задание</p>
      </div>
    </li>
  ))}
</ul>);

export default ItemList;