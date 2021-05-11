import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
