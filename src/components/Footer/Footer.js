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

    return (<footer className={styles.footer}>
      <p className={styles.text}>Завершенные <TodoCount count={countDone} /></p>
      <p className={styles.text}>Не завершенные <TodoCount count={countNotDone} /></p>
      <p className={styles.text}>Все <TodoCount count={countAll} /></p>
    </footer>)
  }
}

const TodoCount = ({ count }) => (<span className={
  classnames({
    [styles.count]: true,
    [styles.isMany]: count < 3
  })
}>{count}</span>);

Footer.defaultProps = {
  countAll: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired 
};

export default Footer;