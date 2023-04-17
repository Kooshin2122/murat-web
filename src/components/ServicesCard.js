//
import React, { useState } from 'react';
//
const ServicesCard = ({ id, serviceName, serviceDescription, image, }) => {
    const [expand, setExpand] = useState(false)
    const customiseText = (text = '') => {
        if (text.length >= 230)
            return (
                <>
                    {text.slice(0, 205) + '...'}
                    <h1 onClick={() => setExpand(!expand)} className='text-md mt-1 text-secondary cursor-pointer'>
                        Show more
                    </h1>
                </>
            )
        else
            return text;
    }
    //
    return (
        <div className='w-[100%] sm:w-[30%] bg-[#ffffff] shadow-lg rounded-md p-3 mt-[10%] sm:mt-[3%] relative border-t border-secondary'>
            <img
                src={image.default.src}
                className='w-[150px] h-[150px] m-auto rounded-full'
            />
            <div className="my-3">
                <h1 className="text-xl uppercase text-center">
                    {serviceName}
                </h1>
                <div className='text-center text-[14px] mt-3 text-gray-500'>
                    {expand ? serviceDescription : customiseText(serviceDescription)}
                    {
                        expand &&
                        <h1 onClick={() => setExpand(!expand)} className='text-md mt-1 text-secondary cursor-pointer'>
                            Show less
                        </h1>
                    }
                </div>
            </div>
            <h1 className="text-xl text-center px-6 py-3 text-white rounded-md bg-secondary absolute top-[-20px] left-[5px] ">
                {id}
            </h1>
        </div>
    )
}
//
export default ServicesCard;
//