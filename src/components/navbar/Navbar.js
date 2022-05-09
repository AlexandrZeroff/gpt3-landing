import React, { useState } from 'react';
import './navbar.css';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3-logo.svg';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => (
        <>
            <a>Home</a>
            <a href='#whgpt3'>What is GPT?</a>
            <a href='#open-ai'>Open AI</a>
            <a href='#cta'>Request access</a>
            <a href='#blog'>Library</a>
        </>
    )

    return (
        <div className='container mx-auto'>
            <div className='gpt3__navbar-links flex flex-row py-8 px-8'>
                <div>
                    <img src={logo} alt='logo' className='min-h-full'></img>
                </div>
                <nav className='hidden lg:flex justify-start items-center ml-8'>
                    <Menu />
                </nav>
                <div className='hidden md:flex flex-row items-center ml-auto'>
                    <a>Sign in</a>
                    <button type='button' className='bg-[#FF4820] w-36 h-12 border-0 rounded font-medium text-white text-base'>Sign up</button>
                </div>
                <div className='gpt3__navbar-menu ml-auto md:ml-4 my-auto flex lg:hidden relative'>
                    {toggleMenu ?
                        <RiCloseLine color='#fff' size={28} onClick={() => setToggleMenu(false)} /> :
                        <RiMenuFill color='#fff' size={28} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='gpt3__navbar-menu_container'>
                            <div className='gpt3__navbar-menu_container-links flex flex-col justify-end items-end text-right bg-color-footer p-8 absolute right-0 top-[40px] min-w-[240px] mt-4 rounded z-10'>
                                <Menu />
                                <div className='block md:hidden mt-4'>
                                    <a>Sign in</a>
                                    <button type='button' className='bg-[#FF4820] w-36 h-12 border-0 rounded font-medium text-white text-base mt-4'>Sign up</button>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


