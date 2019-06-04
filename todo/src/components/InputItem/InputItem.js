import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem= () => ( <div>
  <TextField
    id="standard-full-width"
    label="Добавить задание"
    style={{ margin: 8 }}
    placeholder="Введите задание"
    fullWidth
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
  />
</div> );

export default InputItem;