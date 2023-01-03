import React from 'react';
import timeline from '../data/timeline';
import Timelineitem from './Timelineitem';
import Title from './Title';

function Timeline() {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20 '>
            <div className='w-full md:w-7/12'>
                <Title className ='dark:text-white'>Timeline</Title>
            {timeline.map(item => (
                <Timelineitem 
                year = {item.year}
                title = {item.title}
                duration = {item.duration}
                details = {item.details}
                />
            ))}
            </div>
        </div>
    )
}

export default Timeline