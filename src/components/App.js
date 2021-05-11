import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0
    }
  }
  
  render() {
    return (
      <div>
        <Display result={this.state.result}/>
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
