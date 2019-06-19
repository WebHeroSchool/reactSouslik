import classnames from 'classnames';
import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (
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

Item.defaultProps = {
    isDone: false
};

Item.propTypes = {
    id: PropTypes.number.isRequired
}

export default Item;