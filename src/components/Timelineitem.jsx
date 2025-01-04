import React from 'react';

function Timelineitem({ year, title, duration, details}) {
    return (
        <div className='relative px-4 w-64'>
            <div className='h-1 bg-stone-200 dark:bg-stone-700 w-full absolute top-8'/>
            <div className='relative'>
                <div className='w-4 h-4 bg-red-200 rounded-full absolute left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 mt-8 
                border-2 border-white dark:border-stone-900'/>
                
                <div className='pt-10 text-center'>
                    <span className='inline-block px-2 py-1 font-semibold
                    text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
                        {year}
                    </span>
                    
                    <h3 className='text-lg font-semibold text-stone-900 dark:text-white mt-2'>
                        {title}
                        <div className='text-sm font-normal leading-none
                        text-stone-400 dark:text-stone-500 mt-1'>
                            {duration}
                        </div>
                    </h3>
                    
                    <p className='mt-2 text-sm font-normal text-stone-500 dark:text-stone-400
                    max-h-32 overflow-y-auto'>
                        {details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timelineitem;