import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Cards from './components/Cards';
import Header from './components/Header';

const App = () => {
    const [data, setData] = useState([]);
    const [dataLimit, setDataLimit] = useState(true);

    const sortByDate = () => {
        const sortedData = data.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
        setData(sortedData);
    }

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools);
        }
        loadData();
    }, []);

    return (
        <>
            <Header sortByDate={sortByDate}></Header>
            <Cards data={data} setData={setData} dataLimit={dataLimit}></Cards>

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