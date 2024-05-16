"use client"

import DrawerRight from '@/utils/DrawerRight';
import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';
  
const Nav = () => {

    const [loggedIn, setLogged] = useState(false);

    const handleLogin = () => {
        try {
            
        } catch (error) {
            if (error instanceof Error) {
                console.log("Error");
            }
            else {
                return false;
            }
        }
    }

  return (
    <div
        className='min-h-[10vh] bg-dark-rich_black-200 flex justify-between items-center px-[2rem] w-ful✝ '
    >
        <section className='flex gap-x-[0.6rem] hover:gap-x-[0.7rem] transition-all duration-300 ease-in-out items-center'>
            <Image src='/logo_jehr.jpg' alt='client-logo' width={32} height={32} className='rounded-full cursor-pointer hover:shadow-dark-majorelle_blue-900 hover:shadow-md outline-none hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out' />

            <Typography component="div" variant='h6' className='text-dark-periwinkle-800 cursor-pointer hover:shadow-md outline-none hover:translate-x-2 hover:scale-110 transition-all duration-200 ease-in-out hidden sm:block' sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700
            }}>jehr-neet</Typography>
        </section>

        <ul className='sm:flex mx-0 gap-x-[1.4rem] hidden'>
            <li className='font-semibold cursor-pointer text-dark-periwinkle-800 hover:bg-dark-majorelle_blue px-3 py-1 rounded-md mx-0 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                Courses
            </li>
            <li className='font-semibold text-dark-periwinkle-800 cursor-pointer hover:bg-dark-majorelle_blue px-3 py-1 rounded-md mx-0 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                Webinars
            </li>
            <li className='font-semibold text-dark-periwinkle-800 cursor-pointer hover:bg-dark-majorelle_blue px-3 py-1 rounded-md mx-0 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                Gallery
            </li>
            <li className='font-semibold text-dark-periwinkle-800 cursor-pointer hover:bg-dark-majorelle_blue px-3 py-1 rounded-md mx-0 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                About us
            </li>
        </ul>

        <React.Fragment>
            {(loggedIn) ? (
                <React.Fragment>
                    <section className='sm:flex hidden justify-center items-center gap-x-[1rem]'>
                    
                        <button className='px-5 py-2 rounded-md bg-dark-amaranth_purple hover:shadow-md hover:shadow-dark-amaranth_purple-200 text-dark-periwinkle-800 font-bold hover:translate-x-2 hover:scale-105  cursor-pointer hover:font-extrabold hover:bg-gradient-to-tr hover:from-dark-amaranth_purple-400 hover:to-dark-amaranth_purple-600 transition-all duration-300 ease-in-out' style={{
                            fontFamily: "Roboto Condensed, sans-serif",
                            fontWeight: 600
                        }}>
                        Dashboard
                        </button>
                        <Typography className='font-bold hover:translate-x-2 hover:scale-105 hover:font-bold transition-all duration-300 cursor-pointer ease-in-out text-dark-periwinkle-900 hover:bg-dark-majorelle_blue px-5 py-2 rounded-lg items-center' sx={{
                            fontFamily: "Roboto Condensed, sans-serif",
                            fontWeight: 600
                        }} >
                            Logout
                        </Typography>
                    </section>
                </React.Fragment>    
            ) : (
                <React.Fragment>
                    <section className='sm:flex hidden justify-center items-center gap-x-[1rem]'>
                        <button className='px-5 py-2 rounded-md bg-dark-amaranth_purple hover:shadow-md cursor-pointer hover:shadow-dark-amaranth_purple-200 text-dark-periwinkle-800 font-bold hover:translate-x-2 hover:scale-105 hover:font-extrabold hover:bg-gradient-to-tr hover:from-dark-amaranth_purple-400 hover:to-dark-amaranth_purple-600 transition-all duration-300 ease-in-out' style={{
                            fontFamily: "Roboto Condensed, sans-serif",
                            fontWeight: 600
                        }}>
                            <Link href="/sign-in">
                            Login
                            </Link>
                        </button>

                        <Typography className='font-bold hover:translate-x-2 cursor-pointer hover:scale-105 hover:font-bold transition-all duration-300 ease-in-out text-dark-periwinkle-900 hover:bg-dark-majorelle_blue px-5 py-2 rounded-lg items-center' sx={{
                            fontFamily: "Roboto Condensed, sans-serif",
                            fontWeight: 600
                        }}>
                            <Link href="/sign-up">
                            Signup
                            </Link>
                        </Typography>
                    </section>
                </React.Fragment>
            )}
        </React.Fragment>

        <main className='block sm:hidden'>
            <DrawerRight />
        </main>
    </div>
  )
}

export default Nav