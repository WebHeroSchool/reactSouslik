import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'проснуться',
        isDone: true
      },
      {
        value: 'побриться',
        isDone: false
      },
      {
        value: 'наступить на кота',
        isDone: true
      },
      {
        value: 'с женой поругаться',
        isDone: false
      }
    ]
  };

  render() {
    let isMany = false;

    return (
      <div className={styles.todo}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>Список дел</h1>
            <InputItem />
            <ItemList items={this.state.items} />
            <Footer count={isMany} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default App;
