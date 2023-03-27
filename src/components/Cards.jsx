import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const data = await res.json();
            setData(data.data.tools);
        }
        loadData();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 mb-10'>
            { props.dataLimit ?
                data.slice(0, 6).map(singleData => <Card data={singleData} key={singleData.id}></Card>)
                : data.map(singleData => <Card data={singleData} key={singleData.id}></Card>)
            }
        </div>
    );
};

export default Cards;