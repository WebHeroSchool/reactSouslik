import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    error: false,
    label: 'Давай добавим новую задачу',
    inputValue: ''
  }; 

  onClickClearField = () => {

    if (this.state.inputValue === '') {
      this.setState({
        error: true,
        label: 'Эй, не ленись, введи задачу!'
      });
    } else {      
      this.setState({
        error: false,
        label: 'Добавить задание',
        inputValue: ''
    })

      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  };

  render() {
    
    return (<Grid className={styles.Grid}>
      <TextField
        className={styles.TextField}
        error={this.state.error}
        id="outlined-dense"        
        label={this.state.label}
        margin="dense"
        onChange={event => this.setState({ inputValue: event.target.value })}
        value={this.state.inputValue}
        variant="outlined"          
      />
      <Button        
        className={styles.Button}
        color="primary"
        onClick={this.onClickClearField}
        variant="contained"
      >+</Button>
    </Grid>);
  }
}

export default InputItem;