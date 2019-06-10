import classnames from 'classnames';
import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone }) => (
    <div>
        <Checkbox
            checked={isDone}
            tabIndex={-1}
            onClick={() => onClickDone(isDone)}
        />
        <span className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>{value}</span>
    </div>
);

export default Item;