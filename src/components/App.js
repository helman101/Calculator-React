import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const calculateFunc = calculate;
  return (
    <div>
      <>
        <Display />
        <ButtonPanel />
      </>
    </div>
  );
};

export default App;
