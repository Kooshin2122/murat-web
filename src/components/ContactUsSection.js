//
import emailjs from '@emailjs/browser';
import { TextField, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { MdCall, MdOutlineMail, MdLocationOn } from 'react-icons/md';
//
const ContactUsSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t3rpg89', 'template_y8i2fke', form.current, 'ujIHmC1P3K9EA-QAf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                console.log('error ayaa dhacay');
            });
        e.target.reset();
    };
    //
    return (
        <div className='w-[100%] h-[95%] flex flex-col sm:flex-row justify-end items-center gap-y-5 sm:gap-y-0 relative py-5 sm:p-5'>
            <div className='w-[100%] sm:w-[35%] h-[80%] p-5 sm:absolute left-0 bg-secondary rounded-[10px] flex flex-col justify-center px-16' >
                <ContactsCard Icon={MdCall} title="Call Us" value="+252 77-0-610-699" />
                <ContactsCard Icon={MdLocationOn} title="Location" value="Mogadisho-Somalia" />
                <ContactsCard Icon={MdOutlineMail} title="Email" value="muratclinic30@gmail.com" />
            </div>
            {/* Form  */}
            <div className='w-[100%] sm:w-[85%] h-full flex justify-end p-5 bg-white shadow-2xl rounded-[10px]'>
                <form ref={form} onSubmit={sendEmail} className='w-[100%] sm:w-[75%] h-full flex items-center gap-16 flex-wrap py-5'>
                    <TextField
                        required
                        type="text"
                        name="user_name"
                        label="Full Name"
                        variant="outlined"
                        className='w-[100%] sm:w-[45%]'
                    />
                    <TextField
                        required
                        name="user_phone_number"
                        label="Phone Number"
                        variant="outlined"
                        className='w-[100%] sm:w-[45%]'
                    />
                    <TextField
                        required
                        type="email"
                        label="Email"
                        name="user_email"
                        variant="outlined"
                        className='w-[100%] sm:w-[45%]'
                    />
                    <TextField
                        required
                        id="Subject"
                        label="Subject"
                        name='subject'
                        variant="outlined"
                        className='w-[100%] sm:w-[45%]'
                    />
                    <TextField
                        required
                        id="message"
                        name="message"
                        multiline
                        rows={5}
                        label="Message"
                        variant="outlined"
                        className='w-[98%]'
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className='bg-secondary hover:bg-[#34b4eb] w-[15%] py-3 text-white'
                    >
                        send
                    </Button>
                </form>
            </div>
        </div>
    )
};
//
export default ContactUsSection;
//
export const ContactsCard = ({ Icon, title, value }) => {
    return (
        <div className='flex flex-row items-center gap-x-5 mb-[5vh]'>
            <Icon size={30} color="white" />
            <div className='text-lg text-white'>
                <h1>
                    {title}
                </h1>
                <h1>
                    {value}
                </h1>
            </div>
        </div>
    )
};
