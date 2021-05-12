import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '',
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const { total, next, operation } = this.state;
    const buttonName = e.target.value;
    const number = Number(buttonName);
    if (!Number.isNaN(number)) {
      if (operation !== null) {
        this.setState({
          next: total === '0' ? buttonName : next.concat(buttonName),
        });
      } else {
        this.setState({
          total: total === '0' ? buttonName : total.concat(buttonName),
        });
      }
    } else {
      const newState = calculate(this.state, buttonName);
      this.setState(newState);
    }
  }

  render() {
    const { total, next } = this.state;
    return (
      <div>
        <>
          <Display total={next === '' ? total : next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
