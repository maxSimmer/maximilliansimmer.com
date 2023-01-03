import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center'>
            <p className='text-sm mt-2 opacity-75'>
                &copy; {new Date().getFullYear()} Max Simmer. All rights reserved.
            </p>
        </div>
    )
}

export default Footer