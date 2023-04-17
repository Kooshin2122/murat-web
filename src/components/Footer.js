//
import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTelephoneOutbound } from 'react-icons/bs';
//
const Footer = () => {
    return (
        <section id="about-us" className='min-h-[40vh] grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-10 py-7 sm:py-0 font-poppins text-white'>
            <div>
                <h1 className='text-2xl font-semibold text-secondary mb-3' >
                    Murat Clinic in africa
                </h1>
                <p className='font-poppins' >
                    First, it aimed to set out with the principles of people-oriented, reliability, meticulousness, impartiality, responsibility, accessibility and self-sacrifice.
                </p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-secondary mb-3'>
                    Socials and Media
                </h1>
                <p className='font-poppins'>
                    Feel free to drop us a note if you wish to learn more about the treatments, or if you simply want to say hi.
                </p>
                <div className='flex flex-row items-center gap-x-4' >
                    <div
                        className={`font-poppins font-normal cursor-pointer text-[16px] w-fit rounded-md mt-2`}>
                        <a href={`https://www.facebook.com/profile.php?id=100089034166635&mibextid=LQQJ4d`} className='leading-5'>
                            <BsFacebook size={23} color="#25aae6" />
                        </a>
                    </div>
                    <div
                        className={`font-poppins font-normal cursor-pointer text-[16px] w-fit rounded-md mt-2`}>
                        <a href={`https://instagram.com/murat_clinic_?igshid=YmMyMTA2M2Y=`} className='leading-5'>
                            <BsInstagram size={23} color="#f7847f" />
                        </a>
                    </div>
                    <div
                        className={`font-poppins font-normal cursor-pointer text-[16px] w-fit rounded-md mt-2`}>
                        <a href={'https://vm.tiktok.com/ZMYWaNujR/'} className='leading-5'>
                            <FaTiktok size={23} color="black" className='bg-rose-500 p-1 rounded' />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-secondary mb-3'>Use full links</h1>
                <div className='flex flex-col gap-y-[0.3]'>
                    <a href={`#home`} className='leading-5 decoration-clone text-slate-100'>
                        home
                     </a> <br />
                    <a href={`#contact-us`} className='leading-5 text-slate-100'>
                        contact-us
                    </a> <br />
                    <a href={`#about-us`} className='leading-5 text-slate-100'>
                        about-us
                    </a> <br />
                    <a href={`#services`} className='leading-5 text-slate-100'>
                        services
                    </a> <br />
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold text-secondary mb-3'>Contact Us</h1>
                <p className='font-poppins'>
                    Mogadishu / Makka Almukkarama street Adani Tower next to the Carwa Alkowther / Flour Ten Room 1005.
                </p>
                <div className='flex flex-row items-center'>
                    <MdOutlineEmail style={{ marginRight: 5 }} /> Email
                </div>
                <p className='font-poppins ml-5'>
                    <a href={`info@muratclinic.com`} className='leading-5 '>
                        info@muratclinic.com
                    </a>
                </p>
                <div className='flex flex-row items-center'>
                    <BsTelephoneOutbound style={{ marginRight: 5 }} /> Call Us
                </div>
                <p className='font-poppins ml-5'>
                    <a href={`#features`} className='leading-5'>
                        +252 77-0-498-454 <br />
                        +252 77-0-583-710 <br />
                        +252 77-0-610-549 <br />
                    </a>
                </p>
            </div>
        </section>
    )
}
//
export default Footer
//