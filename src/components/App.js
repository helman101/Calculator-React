import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
/* import calculate from '../logic/calculate'; */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }
}

export default App;
