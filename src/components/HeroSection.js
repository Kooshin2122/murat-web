//
import React from 'react';
import { customStyle } from '@/theme/CustomeStyle';
import { Button } from '@mui/material';
//
const HeroSection = () => (
    <section className={`md:w-[60%] py-10 sm:m-auto`} >
        <div className={`flex-col xl:px-0`}>
            <h1 className="font-poppins text-[1.8rem] text-center text-gray-50 sm:text-[3.8rem] font-semibold">
                Welcome to
            </h1>
            <h1 className="font-poppins text-[1.8rem] text-center sm:text-[3.8rem] font-semibold text-secondary sm:mt-[-15px]">
                Murat clinic in africa
            </h1>
            <p className={`${customStyle.paragraph} w-[95%] sm:w-[70%] text-gray-200 text-[13px]  m-auto text-center`}>
                Murat Clinic in Africa Wuxuu Kaa Cawinaya Daweynta ,
                Qurxinta Iyo Talo Walbo Oo Ku Sabsab Maqaarkaga,
                iyo Timahaga
            </p>
            <div className='flex justify-center mt-10'>
                <Button variant="contained" disabled className="bg-secondary hover:bg-[#34b4eb]" >
                    Make Appointment
                </Button>
            </div>
        </div>
    </section>
)
//
export default HeroSection;
//