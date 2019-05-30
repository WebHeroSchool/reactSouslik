import React from 'react';
import ReactDOM from 'react-dom'; 

// reactComponent
const ItemList = () => ( <ol>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ol>);

// added reactComposition
const App = () => ( <div>
  <h1>To do</h1>
  <ItemList /> 
</div> );

export default App;