import React from 'react';
import timeline from '../data/timeline';
import Timelineitem from './Timelineitem';
import Title from './Title';

function Timeline() {
    return (
        <div className='my-20'>
            <div className='text-center mb-8'>
                <Title>Timeline</Title>
            </div>
            <div className='overflow-x-auto'>
                <div className='flex flex-row min-w-max px-4 justify-center mx-auto'>
                    {[...timeline].reverse().map(item => (
                        <Timelineitem 
                        year = {item.year}
                        title = {item.title}
                        duration = {item.duration}
                        details = {item.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline