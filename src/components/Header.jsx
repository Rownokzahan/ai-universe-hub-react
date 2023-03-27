import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div className='text-center my-10'>
            <h1 className='text-4xl font-bold'>AI Universe Hub</h1>
            <Button>Sort By Date</Button>
        </div>
    );
};

export default Header;