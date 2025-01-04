import React from 'react';

function Title({ children, id }) {
    return (
        <h1 
        id={id && id}
        className='text-2x1 font-bold underline
        underline-offset-8 decoration-4 mb-5
        bg-gradient-to-r from-white via-sky-300 to-blue-400 
        bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent'>
            {children}
        </h1>
    )
}

export default Title;