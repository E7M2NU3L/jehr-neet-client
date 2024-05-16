import { Typography } from '@mui/material'
import React from 'react'
import {Facebook, WhatsApp, Twitter, Instagram, YouTube, LinkedIn} from '@mui/icons-material'

const Foot = () => {
    const date = new Date();
    const Fullyear = date.getFullYear();
    return (
    <div className='min-h-[45vh] bg-dark-rich_black-200  w-full flex flex-col justify-around py-[2rem]'>

        <section className='flex justify-around items-center px-[2rem] flex-col sm:flex-row '>
        <main className='flex flex-col gap-y-[0.8rem] w-full'>
            <Typography variant='h3' sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 700,
            }} className='text-dark-amaranth_purple-700 text-lg '>
                Jehr-Neet
            </Typography>

            <Typography sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 500,
            }} className='mb-[1.4rem] text-dark-amaranth_purple-700 text-sm '>
                Powered by Jehr-Solutions, A company Made to provide Solutions on every corner
            </Typography>

            <section className='flex justify-center items-center gap-x-[1rem]'>
                <Facebook className='text-blue-400' />
                <Instagram className='text-pink-500' />
                <WhatsApp className='text-green-500' />
                <Twitter className='text-blue-600' />
                <YouTube className='text-red-500' />
                <LinkedIn className='text-blue-300'  />
            </section>
        </main>

        <main className='flex justify-center items-center w-full flex-col py-[2rem]'>
            <Typography variant='h6' sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 500,
            }} className='mb-[1.4rem] text-dark-amaranth_purple-700 text-lg hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                Quick Links
            </Typography>

            <section className='gap-y-[0.8rem] flex flex-col'>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    Courses 
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    Webinars
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    Gallery
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    About us
                </Typography>
            </section>
        </main>

        <main className='flex justify-center items-center w-full flex-col pb-[2rem]'>
            <Typography variant='h6' sx={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 500,
            }} className='mb-[1.4rem] text-dark-amaranth_purple-700 text-lg hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                Products and Services
            </Typography>

            <section className='gap-y-[0.8rem] flex flex-col'>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    HR Analytics 
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    HealthCare Softwares
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    Automation Tools
                </Typography>
                <Typography variant='h6' sx={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 500,
                }} className='text-dark-amaranth_purple-700 text-sm hover:text-dark-amaranth_purple-600 font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    Tech Services
                </Typography>
            </section>
        </main>
        </section>

        <section className='w-full flex justify-center items-center'>
            <Typography className='text-dark-amaranth_purple-500 text-sm font-normal' >
                &copy; {Fullyear} All Rights Reserved
            </Typography>
        </section>
    </div>
  )
}

export default Foot