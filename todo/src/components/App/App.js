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
    ],

    count: 6
  };

  onClickDone = id => {//создаем образотчик события
    const newItemList = this.state.items.map(item => {//перебираем текущее состояние элементов
      const newItem = { ...item };//изменяем наш объект
      if (item.id === id) {//проверяем, что это именно тот элемент, на который кликнули
        console.log( item.id);
        newItem.isDone = !item.isDone;//переписываем состояние 
        console.log(newItem.isDone);
      }

      return newItem;//возвращаем новый список
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = (id) => {
    const newItemList = this.state.items.filter(item => {//проверяю, если id !=, то добавляю в новый список
      if (item.id !== id) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({ items: newItemList });
  };
 
  onClickFooter = () => this.setState((state) => ({ count: state.count - 1 }));//test

  render() {
    let isMany = false;

    return (
      <div className={styles.todo}>
        <Card>
          <CardContent>
            <h1 className={styles.title}>Список дел</h1>
            <InputItem />
            <ItemList
              items={this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />
            <Footer count={this.state.count} onClickFooter={this.onClickFooter} />
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default App;