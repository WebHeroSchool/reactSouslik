import classnames from 'classnames';
import React from 'react';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

let date = new Date();
class Item extends React.Component {
  componentDidMount() {
    console.log(`${date.getHours()}:${date.getMinutes()} Монтирование компонента "${this.props.value}"`);
  }
  componentDidUpdate() {
    console.log("обновление задач");
  }
  componentWillUnmount() {
    clearInterval(this.idInterval);
    console.log(`${date.getHours()}:${date.getMinutes()} Демонтирование компонента "${this.props.value}"`);
  }
  componentWillUpdate() {
    console.log("обновление списка");
  }
  componentDidCatch() {
    console.log("Error при рендере");
  }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return (
      <div className={styles.wrapper}>
        <div>
          <Checkbox
            color="primary"
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
  };
};

export default Item;