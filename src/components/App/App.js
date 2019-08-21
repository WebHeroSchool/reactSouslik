import React from 'react';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import PropTypes  from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return(
      <Router>
        <div className={styles.App}>
          <div className={styles.sidebar}>
            <MenuList className={styles.sidebar_nav}>
              <Link to='/todo' className={styles.link}><MenuItem className={styles.link_item}>Список дел</MenuItem></Link>
              <Link to='/' className={styles.link}><MenuItem className={styles.link_item}>Обо мне</MenuItem></Link>
            </MenuList>
          </div>
          <Card className={styles.content}>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
          </Card>
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
  onClickAdd: PropTypes.func
}

export default App;