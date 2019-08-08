import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Todo.module.css';

class Todo extends React.Component {
  state = {
    items: [
    ],
    count: 0,
    countDone: 0,
    countNotDone: 0
  };

  onClickAdd = (value) => {
    const newItemList = this.state.items.map( item => {
      const newItem = {...item};
      return newItem;
    });

    let newId = 0;
    let arr = newItemList.map( item => {
      return item.id; 
    });

    if (arr.length > 0) {
      newId = Math.max.apply(null, arr) + 1;
    }

    if (getValues(newItemList, value) === false) {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: newId
          }
        ],
        count: ++state.count,
        countNotDone: ++state.countNotDone
      }));
    } else {
      console.log(InputItem);
      
    }
  } 

  onClickDone = id => {
    const newItemList = this.state.items.map( item => {
      const newItem = {...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }      

      return newItem;
    });
    
    this.setState({ 
      items: newItemList,
      countDone: getCountDon(newItemList),
      countNotDone: this.state.count - getCountDon(newItemList)
    });
  };

  onClickDelete = id => {
    const newCount = this.state.count - 1,
      newItemList = this.state.items.filter( item => {
        return item.id !== id;
    });    

    this.setState({
      count: newCount,
      countDone: getCountDon(newItemList),
      countNotDone: newCount - getCountDon(newItemList),
      items: newItemList }); 
  };

  render() {

    return (
      <div >
        <Card>
          <CardContent>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>Список моих дел</h1>
              <Footer 
                countAll={this.state.count}
                countDone={this.state.countDone}
                countNotDone={this.state.countNotDone}
              />    
            </div>            
            <InputItem onClickAdd={this.onClickAdd} />
            <ItemList
              items={this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />            
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Todo;

function getCountDon(i) {
  const newCount = i.filter( item => {
      
    if(item.isDone === true) {
      return item.isDone
    }   
  });
  return newCount.length;
};

function getValues(i, value) {
  const newValueList = i.map( item => {
    return item.value;
  });

  if (newValueList.indexOf( value ) !== -1) {
    return true;
  } else {
    return false;
  }
};