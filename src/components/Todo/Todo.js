import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './Todo.module.css';
import Warning from '../Warning/Warning';

class Todo extends React.Component {
  state = {
    items: [],
    count: 0,
    countDone: 0,
    countNotDone: 0,
    isActive: 'all',
    id_0: 0
  };

  onClickAdd = (value) => {
    let newId = 0,
      arrId = [],
      arrValue = [];

    this.state.items.map(item => {
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
      let id_0 = this.state.items[0].id;
      const newItemList = this.state.items.map(item => {
        const newItem = {
          ...item
        };

        if (item.value === value) {
          newItem.isDouble = true;
        }

        return newItem;
      });      

      this.setState({
        items: newItemList,
        id_0: id_0
      });
    }
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = {
        ...item
      };

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
      newItemList = this.state.items.filter(item => {
        return item.id !== id;
      });

    this.setState({
      count: newCount,
      countDone: getCountDon(newItemList),
      countNotDone: newCount - getCountDon(newItemList),
      items: newItemList
    });
  };

  onClickSort = (e) => {
    const elem = e.target;
    const newItemList = this.state.items.filter(item => {
      item.isHidden = true;

      if (elem.id === 'isDone') {
        this.setState({
          isActive: 'isDone'
        });
        if (item.isDone) {
          item.isHidden = false;
        }
      } else if (elem.id === 'isNotDone') {
        this.setState({
          isActive: 'isNotDone'
        });
        if (!item.isDone) {
          item.isHidden = false;
        }
      } else {
        this.setState({
          isActive: 'all'
        });
        item.isHidden = false
      }
      return item;
    });

    this.setState({
      items: newItemList
    });
  };

  render() {
    const warningTitle = 'Вы еще не добавили ни одной задачи',
          warningSubtitle = 'Сделайте это прямо сейчас!';

    return ( <div className={styles.todo_wrapp}>
      <Card >
        <CardContent >
            <Footer countAll = {this.state.count}
                    countDone = {this.state.countDone}
                    countNotDone = {this.state.countNotDone}
                    onClickSort = {this.onClickSort}
                    isActive = {this.state.isActive}
            />
          <div className = {styles.box} >
            <ItemList id_0 = {this.state.id_0}
                      items = {this.state.items}
                      onClickDone = {this.onClickDone}
                      onClickDelete = {this.onClickDelete}
            />
            <Warning
              count = {this.state.count}
              warningTitle = {warningTitle}
              warningSubtitle = {warningSubtitle} />
          </div>
          <InputItem onClickAdd = {this.onClickAdd} />
        </CardContent >
      </Card>
    </div>
    );
  }
}

export default Todo;

function getCountDon(i) {
  const newCount = i.filter(item => {return item.isDone});

  return newCount.length;
};