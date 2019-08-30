import React from 'react';
import classnames from 'classnames';
import styles from './Warning.module.css';

class Warning extends React.Component {

  render() {
    const { count, warningTitle, warningSubtitle } = this.props;

    return (<div className={
      classnames({
        [styles.Warning]: true,
        [styles.hidden]: count > 0
      })
    }>
      <img className={styles.pictur} src='images/no-task.png' alt={warningTitle} />
      <div className={styles.text_wrapper}>
        <span className={styles.title}>{warningTitle}</span>
        <span className={styles.subtitle}>{warningSubtitle}</span>
      </div>      
    </div>);
  }
};

export default Warning;