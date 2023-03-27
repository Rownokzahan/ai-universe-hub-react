import React from 'react';
import Button from './Button';

const Header = (props) => {
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl font-bold'>AI Universe Hub</h1>
            <span onClick={props.sortByDate}>
                <Button>Sort By Date</Button>
            </span>           
        </div>
    );
};

export default Header;