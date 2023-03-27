import React from 'react';

const Button = (props) => {
    return (
        <>
            <button className='btn btn-error my-5 capitalize'>{ props.children}</button>
        </>
    );
};

export default Button;