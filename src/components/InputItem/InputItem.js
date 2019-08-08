import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  componentDidMount() {
    console.log("смонтировано поле ввода");
  }

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
      });

      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  }

  render() {
    
    return (<Grid>
      <TextField
        error={this.state.error}
        id="standard-dense"
        label={this.state.label}
        margin="dense"
        fullWidth
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={this.onClickClearField}
      >
        Добавить
      </Button>
    </Grid>);
  }
}

export default InputItem;