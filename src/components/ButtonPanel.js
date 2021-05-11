import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <React.Fragment/>
            <Button name={'AC'}/>
            <Button name={'+/-'}/>
            <Button name={'%'}/>
            <Button name={'÷'}/>
          <React.Fragment/>
        </div>
        <div>
          <React.Fragment/>
            <Button name={'7'}/>
            <Button name={'8'}/>
            <Button name={'9'}/>
            <Button name={'X'}/>
          <React.Fragment/>
        </div>
        <div>
          <React.Fragment/>
            <Button name={'4'}/>
            <Button name={'5'}/>
            <Button name={'6'}/>
            <Button name={'-'}/>
          <React.Fragment/>
        </div>
        <div>
          <React.Fragment/>
            <Button name={'1'}/>
            <Button name={'2'}/>
            <Button name={'3'}/>
            <Button name={'+'}/>
          <React.Fragment/>
        </div>
        <div>
          <React.Fragment/>
            <Button name={'0'}/>
            <Button name={'.'}/>
            <Button name={'='}/>
          <React.Fragment/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
