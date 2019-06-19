import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const TodoCount = ({ count }) => (<span className={
  classnames({
    [styles.count]: true,
    [styles.isMany]: count < 5
  })
}>{count}</span>);

const Footer = ({ count }) => (<footer>Незаконченных дел: <TodoCount count={count} /></footer>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired 
};

export default Footer;
