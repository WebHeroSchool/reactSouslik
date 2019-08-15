import React from 'react';
import Item from '../Item/Item';
import classnames from 'classnames';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul className={styles.list}>
  { items.map(item => (
    <li key={item.id} className={
      classnames({
        [styles.listItem]: true,
        [styles.isDouble]: item.isDouble
      })}>
      <Item
        value={item.value}
        isDone={item.isDone}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        isDouble={item.isDouble}       
      />
      <div className={
        classnames({
          [styles.hint]: true,
          [styles.visible]: item.isDouble
        })
      }>
        <p className={styles.hintText}>Такое задание уже есть в нашем списке. Введите другое задание</p>
      </div>
    </li>
  ))}
</ul>);

export default ItemList;