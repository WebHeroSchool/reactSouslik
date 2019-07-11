import React from 'react';

import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



class Todo extends React.Component {
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
    count: 4
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

  onClickDelete = id => {
    const newCount = this.state.count - 1,
      newItemList = this.state.items.filter( item => {      

        return item.id !==id;
    });    

    this.setState({ count: newCount, items: newItemList }); 
  };

  onClickAdd = (value) => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
     count: state.count + 1
  }));  

  render() {

    return (
      <div >
        <Card>
          <CardContent>
            <h1 >Список дел</h1>
            <InputItem onClickAdd={this.onClickAdd} />
            <ItemList
              items={this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />
            <Footer count={this.state.items.length} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Todo;