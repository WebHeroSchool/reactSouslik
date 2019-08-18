import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Todo.module.css';
import NoTask from '../NoTask/NoTask';

class Todo extends React.Component {
  state = {
    items: [
    ],
    count: 0,
    countDone: 0,
    countNotDone: 0,
    isChecked: 'all'
  };

  onClickAdd = (value) => {
    let newId = 0;
    let arrId = [];
    let arrValue = [];
    let newItemList = this.state.items.map( item => {
      item.isDouble = false;
      item.isHidden = false;
      arrId.push(item.id);
      arrValue.push(item.value);
      return item;
    });

    if (!arrValue.includes(value)) {
      if (arrId.length > 0) {
        newId = Math.max.apply(null, arrId) + 1;
      }

      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            id: newId,
            isDone: false,            
            isDouble: false
          }
        ],
        count: ++state.count,
        countNotDone: ++state.countNotDone
      }));
    } else {
      const newItemList = this.state.items.map( item => {
        const newItem = {...item};
  
        if (item.value === value) {
          newItem.isDouble = true;
        }
          
        return newItem;
      });
      
      this.setState({ 
        items: newItemList,
      });
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

  onClickSort = (e) => {
    const elem = e.target;
    const newItemList = this.state.items.filter( item => {
      item.isHidden = true;

      if(elem.id === 'isDone') {
        this.setState({ isChecked: 'isDone' });
        if(item.isDone) {
          item.isHidden = false;
        }
      } else if(elem.id === 'isNotDone') {
        this.setState({ isChecked: 'isNotDone' });
        if(!item.isDone) {
          item.isHidden = false;
        }
      } else {
        this.setState({ isChecked: 'all' });
        item.isHidden = false
      }
      console.log(this.state)
      return item;
    });    

    this.setState({ items: newItemList }); 
  };  

  render() {

    return (
      <div>
        <Card>
          <CardContent>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>Список моих дел</h1>
              <Footer 
                countAll={this.state.count}
                countDone={this.state.countDone}
                countNotDone={this.state.countNotDone}
                onClickSort={this.onClickSort}
                isChecked={this.state.isChecked}
              />    
            </div>
            <div className={styles.box}>
              <ItemList
                items={this.state.items}
                onClickDone={this.onClickDone}
                onClickDelete={this.onClickDelete}
              />
              <NoTask count={this.state.count} />
            </div>
            
            <InputItem onClickAdd={this.onClickAdd} />            
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