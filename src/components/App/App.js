import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    isCheck: document.location.href.includes('/todo')
  }

  render() {
    const click = () => {
      setTimeout( () => {
        this.setState({
          isCheck: document.location.href.includes('/todo')
        });
      }, 100);
    };

    return (
      <Router>
        <div className={styles.App}>
          <nav className={styles.sidebar}>
            <MenuList className={styles.sidebar_nav}>
              <Link to='/todo' onClick={click}
                className={classnames({
                  [styles.link]: true,
                  [styles.link_active]: this.state.isCheck
              })}><MenuItem id={'btnList'} className={styles.link_item}>Список дел</MenuItem></Link>
              <Link to='/' onClick={click}
                className={classnames({
                  [styles.link]: true,
                  [styles.link_active]: !this.state.isCheck
              })}><MenuItem id={'btnAbout'} className={styles.link_item}>Обо мне</MenuItem></Link>
            </MenuList>
          </nav>
          <div className={styles.content}>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  items: PropTypes.object,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickAdd: PropTypes.func,
};

export default App;
