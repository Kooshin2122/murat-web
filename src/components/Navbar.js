//
import { fromJSON } from 'postcss';
import React, { useState } from 'react';
//
import logo from '../assets/logo.png';
//
import { navLinks } from '../constants'
import { Avatar } from '@mui/material';
import { GrMenu, GrClose } from 'react-icons/gr'
import { MdWifiCalling2 } from 'react-icons/md';
import AccountMenu from './AccountMenu';
//
const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`w-full  flex py-6 justify-between items-center navbar`}>
            <img src={logo.src} alt="lama" className='w-[140px] sm:w-[250px] sm:h-[60px]' />
            {/* Web nav bar */}
            <ul className='list-none hidden space-x-10 sm:flex justify-end items-center text-white mr-5 '>
                {
                    navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[14px] text-gray-900`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='flex gap-x-3'>
                {/* <AccountMenu /> */}
                <div className='hidden sm:flex gap-x-2'>
                    <MdWifiCalling2 size={28} />
                    <h1>+252 77-0-611-508</h1>
                </div>
                {/* Mobile nav bar */}
                <div className={`sm:hidden flex flex-1 justify-end items-center`}>
                    {
                        toggle
                            ?
                            <GrClose size={27} color="black" onClick={() => setToggle(!toggle)} />
                            :
                            <GrMenu size={27} color="black" onClick={() => setToggle(!toggle)} />
                    }
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-secondary z-50`}>
                        <ul className='list-none space-y-5 flex flex-col justify-end flex-1 text-white '>
                            {
                                navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={`font-poppins font-normal cursor-pointer text-[16px]`}>
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))
                            }
                            <div className='flex sm:hidden gap-x-2'>
                                <MdWifiCalling2 size={20} />
                                <h1>+252 77 0 611 508</h1>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
//
export default NavBar;
//