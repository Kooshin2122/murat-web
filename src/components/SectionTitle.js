//
import React from 'react';
//
const SectionTitle = ({ title = 'Titile' }) => {
    return (
        <div className='flex flex-row items-center gap-x-2'>
            <div className='h-[4vh] sm:h-[5vh] w-[2%] sm:w-[1%] rounded bg-secondary' />
            <h1 className='text-xl sm:text-2xl leading-5 font-poppins text-secondary'>
                {title}
            </h1>
        </div>
    )
};
//
export default SectionTitle
//
