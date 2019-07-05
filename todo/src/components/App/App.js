import React from 'react';

import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';
import PropTypes  from 'prop-types';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return(
      <Router>
        <div className={styles.App}>
          <Card classNames={styles.sidebar}>
            <MenuList>
              <Link to='/' className={styles.link}><MenuItem>About</MenuItem></Link>
              <Link to='/todo' className={styles.link}><MenuItem>ToDo</MenuItem></Link>
              <Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link>
            </MenuList>
          </Card>
          <Card className={styles.content}>
            <Route path='/' exact component={About} />
            <Route path='/todo' component={Todo} />
            <Route path='/contacts' component={Contacts} />
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