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
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonName) {
    if (buttonName.to_i) {
      console.log('hi')
    }
  }

  render() {
    const {total, next, operation} = this.state
    return(
      <div>
        <>
          <Display total={total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    )
  }
}

export default App;
