import React from 'react';
import classnames from 'classnames';
import styles from './NoTask.module.css';

class NoTask extends React.Component {
  componentDidMount() {
    console.log('Нет введенных заданий');
  }

  componentWillUnmount() {
    console.log('введена новая задача');
  }

  render() {
    const {count} = this.props;
    
    return (<div className={
      classnames({
        [styles.noTask]: true,
        [styles.hidden]: count > 0
      })
    }>
      <img src='images/no-task.png' alt='Вы еще не добавили ни одной задачи' />
      <span className={styles.title}>Вы еще не добавили ни одной задачи</span>
      <span className={styles.subtitle}>Сделайте это прямо сейчас!</span>
    </div>)
  };
}

export default NoTask;