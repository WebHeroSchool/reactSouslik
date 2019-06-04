import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';


const Count = ({count}) => (<span className = {
  classnames({
    [styles.count]: true,
    [styles.isMany]: count
  })
}>5</span>);


const Footer = ({count}) => ( <footer >Незаконченных дел: <Count count={count} /></footer> );

export default Footer;