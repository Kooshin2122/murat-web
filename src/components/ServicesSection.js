//
import { services } from '@/constants';
import React from 'react';
import ServicesCard from './ServicesCard';
//
const ServicesSection = () => {
    return (
        <section className='flex flex-wrap justify-around'>
            {
                services.map((item) => (
                    <ServicesCard key={item.id} {...item} />
                ))
            }
        </section>
    )
}
//
export default ServicesSection;
//