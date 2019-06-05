import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';


const Count=({ isMany }) => (<span className={
  classnames({
    [styles.count]: true,
    [styles.isMany]: isMany
  })
}>5</span>);


const Footer=({ isMany }) => ( <footer >Незаконченных дел: <Count isMany={ isMany } /></footer> );

export default Footer;