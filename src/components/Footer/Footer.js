import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';

const date = new Date();
class Footer extends React.Component {
  componentDidMount() {
    console.log(`${date.getHours()}:${date.getMinutes()} Монтирование компонента Footer`);
  }

  render() {
    const {countAll, countDone, countNotDone, onClickSort, isActive} = this.props;

    return (<footer className={styles.footer}>
      <h1 className = {
              styles.title
            }>Список <span className={styles.visible}>моих </span>дел</h1>
      <nav className={styles.nav}>
        <div className={classnames({
          [styles.text]: true,
          [styles.active]: isActive === 'isDone'
        })} onClick={onClickSort} id={'isDone'}>
          Завершенные <TodoCount count={countDone} el={'isDone'} isActive={isActive} /></div> 
        <div className={classnames({
            [styles.text]: true,
            [styles.active]: isActive === 'isNotDone'
          })} onClick={onClickSort} id={'isNotDone'}>
            Не завершенные <TodoCount count={countNotDone} el={'isNotDone'} isActive={isActive} /></div>
        <div className={classnames({
          [styles.text]: true,
          [styles.All]: true,
          [styles.active]: isActive === 'all'
        })} onClick={onClickSort} id={'all'}>Все <TodoCount count={countAll} el={'all'} isActive={isActive} /></div>
      </nav>      
    </footer>)
  }
}

const TodoCount = ({ count, isActive, el }) => (
  <span className={classnames({
      [styles.count]: true,
      [styles.countColorWhite]: el === isActive })}>
    {count}
  </span>
);

Footer.defaultProps = {
  countAll: 0,
  countDone: 0,
  countNotDone: 0,
  isActive: 'all'
};

export default Footer;