import React from 'react';
import classnames from 'classnames';
import styles from './Footer.module.css';
import Typography from '@material-ui/core/Typography';

// const Count = ({ isMany }) => (<span className={
//     classnames({
//       [styles.count]: true,
//       [styles.isMany]: isMany
//     })
//   }> 5 </span>);

// const Footer = ({ isMany }) => (<footer>
//   Незаконченных дел: <Count isMany={isMany} />
// </footer>);

const Footer = ({ count, onClickFooter }) => 
  (<Typography variant = 'subtitle1' color='textSecondary' onClick={onClickFooter}>
    Незаконченных дел: {count}
  </Typography>)

export default Footer;