import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const date = new Date;
class Footer extends React.Component {
  componentDidMount() {
    console.log(`${date.getHours()}:${date.getMinutes()} Монтирование компонента Footer`);
  }

  render() {
    const {count} = this.props;

    return (<footer>Незаконченных дел: <TodoCount count={count} /></footer>)
  }
}

const TodoCount = ({ count }) => (<span className={
  classnames({
    [styles.count]: true,
    [styles.isMany]: count < 5
  })
}>{count}</span>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired 
};

export default Footer;
