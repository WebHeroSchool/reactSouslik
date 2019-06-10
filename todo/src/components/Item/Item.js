import classnames from 'classnames';
import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, id, onClickDone, onClickDelete }) => (
    <div className={styles.wrapper}>
        <div>
            <Checkbox
                checked={isDone}
                tabIndex={-1}
                onClick={() => onClickDone(id)}
            />
            <span className={
                classnames({
                    [styles.item]: true,
                    [styles.done]: isDone
                })
            }>{value}</span>
        </div>
        <Checkbox
            value="checkedF"
            indeterminate
            inputProps={{
                'aria-label': 'indeterminate checkbox'
            }}
            onClick={() => onClickDelete(id)}
        />
    </div>
);

export default Item;