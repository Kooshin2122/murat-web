//
import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import CustomizedAccordions from './Accordination';
//
const AboutUsSection = () => {
    return (
        <section className='flex flex-col sm:flex-row justify-between py-5 sm:p-5'>
            <div className='w-[100%] sm:w-[45%] p-4 border-[0.3px] border-gray-300 mb-7 sm:mb-0'>
                <h1 className='text-lg sm:text-[2rem] uppercase font-semibold text-primary'>
                    About
                </h1>
                <h1 className='text-lg sm:text-[2rem] uppercase font-semibold text-secondary my-5'>
                    Murat clinic in Africa.
                </h1>
                <p className={`text-xs sm:text-base text-gray-500`}>
                    Murat clinic in Africa is an aesthetic surgery company
                    serving in East Africa, including Somalia, Ethiopia and Kenya, with its team of doctors and health
                    professionals who are experts in aesthetic surgery and
                    hair transplant operations. In addition that, beard, mustache and eyebrow
                    transplantation and also dermatoloty analysis and treatment are among the services we offer to our
                    patients within the scope of hair transplantation operations.
                </p>
                <div className='flex gap-x-5 items-center mt-1'>
                    Address
                </div>
                <p className={`text-xs sm:text-base text-gray-500 mt-1`}>
                    Mogadishu / Makka Almukkarama street Adani Tower next to the Carwa Alkowther / Flour Ten Room 1005.
                </p>
            </div>
            {/* accordination */}
            <div className='sm:w-[50%] p-4 border-[0.3px] border-gray-300'>
                <h1 className='text-lg sm:text-[2rem] uppercase font-semibold text-primary mb-5'>
                    Why you choose us
                </h1>
                <CustomizedAccordions />
            </div>
        </section>
    )
}
//
export default AboutUsSection;
