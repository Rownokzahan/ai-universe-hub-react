import Card from './Card';

const Cards = (props) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 mb-10'>
            { props.dataLimit ?
                props.data.slice(0, 6).map(singleData => <Card data={singleData} key={singleData.id}></Card>)
                : props.data.map(singleData => <Card data={singleData} key={singleData.id}></Card>)
            }
        </div>
    );
};

export default Cards;