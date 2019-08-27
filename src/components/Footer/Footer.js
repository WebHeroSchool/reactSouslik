import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';

const date = new Date();
class Footer extends React.Component {
  componentDidMount() {
    console.log(`${date.getHours()}:${date.getMinutes()} Монтирование компонента Footer`);
  }

  render() {
    const {countAll} = this.props,
          {countDone} = this.props,
          {countNotDone} = this.props,
          {onClickSort} = this.props,
          {isChecked} = this.props;

    return (<footer className={styles.footer}>
      <h1 className = {
              styles.title
            }>Список <span className={styles.visible}>моих </span>дел</h1>
      <nav className={styles.nav}>
        <div className={classnames({
          [styles.text]: true,
          [styles.active]: isChecked === 'isDone'
        })} onClick={onClickSort} id={'isDone'}>
          <img src='images/isDone.svg' className={styles.hidden} alt="CrazySouslik" />
          <span className={styles.visible}>Завершенные</span> <TodoCount count={countDone} /></div>
        <div className={classnames({
            [styles.text]: true,
            [styles.active]: isChecked === 'isNotDone'
          })} onClick={onClickSort} id={'isNotDone'}>
            <img src='images/isNotDone.svg' className={styles.hidden} alt="CrazySouslik" />
            <span className={styles.visible}>Не завершенные</span> <TodoCount count={countNotDone} /></div>
        <div className={classnames({
          [styles.text]: true,
          [styles.active]: isChecked === 'all'
        })} onClick={onClickSort} id={'all'}>Все <TodoCount count={countAll} /></div>
      </nav>      
    </footer>)
  }
}

const TodoCount = ({ count }) => (
  <span className={styles.count}>
    {count}
  </span>
);

Footer.defaultProps = {
  countAll: 0,
  countDone: 0,
  countNotDone: 0,
  isChecked: 'all'
};

export default Footer;