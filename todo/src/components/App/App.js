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
        isDone: false,
        id: 1
      },
      {
        value: 'побриться',
        isDone: false,
        id: 2
      },
      {
        value: 'наступить на кота',
        isDone: false,
        id: 3
      },
      {
        value: 'с женой поругаться',
        isDone: false,
        id: 4
      }
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map( item => {
      const newItem = {...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;

      }
      
      return newItem;
    });

    this.setState({ items: newItemList });
  };
  

  render() {

    return (
      <div className={styles.todo}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>Список дел</h1>
            <InputItem />
            <ItemList items={this.state.items} onClickDone={this.onClickDone} />
            <Footer count={this.state.items.length} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default App;
