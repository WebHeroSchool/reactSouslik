import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const date = new Date();
class Footer extends React.Component {
  componentDidMount() {
    console.log(`${date.getHours()}:${date.getMinutes()} Монтирование компонента Footer`);
  }

  render() {
    const {countAll} = this.props;
    const {countDone} = this.props;
    const {countNotDone} = this.props;
    const {onClickSort} = this.props;
    const {isChecked} = this.props;

    return (<footer className={styles.footer}>
      <p className={classnames({
          [styles.text]: true,
          [styles.active]: isChecked === 'isDone'
        })} onClick={onClickSort} id={'isDone'}>Завершенные <TodoCount count={countDone} /></p>
      <p className={classnames({
          [styles.text]: true,
          [styles.active]: isChecked === 'isNotDone'
        })} onClick={onClickSort} id={'isNotDone'}>Не завершенные <TodoCount count={countNotDone} /></p>
      <p className={classnames({
        [styles.text]: true,
        [styles.active]: isChecked === 'all'
      })} onClick={onClickSort} id={'all'}>Все <TodoCount count={countAll} /></p>
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

Footer.propTypes = {
  count: PropTypes.number.isRequired 
};

export default Footer;