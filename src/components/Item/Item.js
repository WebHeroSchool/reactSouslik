import classnames from 'classnames';
import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends React.Component {
  componentDidCatch() {
    console.log('Error при рендере');
  }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return (
      <div className={styles.wrapper}>
        <div>
          <Checkbox
            color='primary'
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
          value='checkedF'
          indeterminate
          inputProps={{
            'aria-label': 'indeterminate checkbox'
          }}
          onClick={() => onClickDelete(id)}
        />
      </div>
    );
  };
};

export default Item;