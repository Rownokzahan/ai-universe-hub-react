import React, { useState } from 'react';
import Button from './components/Button';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {
  const [dataLimit, setDataLimit] = useState(true);
  return (
    <>
      <Header></Header>
      <Cards dataLimit={dataLimit}></Cards>

      {dataLimit &&
        <div className='text-center'>
          <span onClick={() => { setDataLimit(false) }}>
            <Button>Show all</Button>
          </span>
        </div>
      }
    </>
  );
};

export default App;