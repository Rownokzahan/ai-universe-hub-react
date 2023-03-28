import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

const Cards = (props) => {
    const [uniqueId, setUniqueId] = useState(null);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 mb-10'>
            {props.dataLimit ?
                props.data.slice(0, 6).map(singleData => <Card
                    data={singleData}
                    setUniqueId={setUniqueId}
                    uniqueId={uniqueId}
                    key={singleData.id}
                ></Card>)
                : props.data.map(singleData => <Card
                    data={singleData}
                    setUniqueId={setUniqueId}
                    uniqueId={uniqueId}
                    key={singleData.id}
                ></Card>)
            }
            {uniqueId && <Modal id={uniqueId}></Modal>}
        </div>
    );
};

export default Cards;