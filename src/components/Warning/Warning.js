import React from 'react';
import classnames from 'classnames';
import styles from './Warning.module.css';

class Warning extends React.Component {

  componentDidMount() {
    console.log('Нет введенных заданий');
  }

  componentWillUnmount() {
    console.log('введена новая задача');
  }

  render() {
    const {count} = this.props,
          {warningTitle} = this.props,
          {warningSubtitle} = this.props;

    return (<div className={
      classnames({
        [styles.Warning]: true,
        [styles.hidden]: count > 0
      })
    }>
      <img src='images/no-task.png' alt={warningTitle} />
      <span className={styles.title}>{warningTitle}</span>
      <span className={styles.subtitle}>{warningSubtitle}</span>
    </div>)
  };
}

export default Warning;