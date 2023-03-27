import React from 'react';
import Button from './components/Button';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Cards></Cards>
      <div className="text-center">
        <Button>Show all</Button>
      </div>
    </div>
  );
};

export default App;