//
import React from 'react';
import store from '../../store';
import { Provider, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import loginImage from '../../assets/aboutUs.jpeg';
import { Button, TextField } from '@mui/material';

const Login = () => {
    const { userInfo } = useSelector((state) => state.globalSlice);
    return (
        <main className={`h-[100vh] bg-[#fafafa] flex flex-col justify-center `}>
            <section className='w-[97%] sm:w-[35%] min-h-[75vh] flex m-auto bg-[#ffffff] shadow-xl rounded-md'>
                {/* login form */}
                <div className='w-[100%]'>
                    <div className='w-full h-[15vh] relative bg-[#15508b5e]'>
                        <div className='w-full h-[3vh] bg-gradient-to-b from-[#ffffff] to-transparent ' />
                        <img
                            src={logo.src}
                            alt="lama haayo"
                            className='m-auto'
                        />
                        <div className='w-full h-[3vh] absolute bottom-0 bg-gradient-to-b from-transparent via-[#ffffff] to-[#ffffff]  ' />
                    </div>
                    <div className='px-4'>
                        <div className='mt-5 w-[100%] flex flex-col gap-y-5'>
                            <h1 className='text-2xl font-poppins text-center leading-10 text-primary'>
                                Login
                            </h1>
                            <TextField
                                required
                                fullWidth
                                id="userName"
                                label="Email-or-username"
                                variant="outlined"
                                className='w-[100%] sm:w-[100%]'
                            />
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                variant="outlined"
                                className='w-[100%] sm:w-[100%]'
                            />
                            <Button variant="contained" className="bg-secondary hover:bg-secondary py-[10px] mt-1" >
                                Login
                            </Button>
                            <Button className='text-md self-end font-poppins w-fit text-end text-secondary cursor-pointer underline hover:underline'>
                                Forgot password
                            </Button>
                            <Button variant="outlined" className="py-2 border-secondary hover:border-secondary text-secondary" >
                                Create new account
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;
