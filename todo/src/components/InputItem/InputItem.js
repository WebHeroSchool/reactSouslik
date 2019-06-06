import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem=() => ( <div>
  <TextField
    id="standard-dense"
    label="Добавить задание"
    margin="dense"
    fullWidth
  />
</div> );

export default InputItem;