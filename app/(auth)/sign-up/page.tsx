"use client"

import {Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'

const SignUp = () => {

  useGSAP(() => {
    // Create the GSAP animation for the first section
    gsap.to('.moving-section-1', {
      duration: 4,
      x: 150, // Move the element 150px to the right
      y: 100, // Move the element 100px down
      repeat: -1,
      yoyo: true,
      ease: 'Power.inOut', // Bounce easing function
    });

    // Create the GSAP animation for the second section
    gsap.to('.moving-section-2', {
      duration: 5,
      x: -120, // Move the element 120px to the left
      y: -70, // Move the element 70px up
      repeat: -1,
      yoyo: true,
      ease: 'elastic.inOut', // Elastic easing function
    });

    // Create the GSAP animation for the third section
    gsap.to('.moving-section-3', {
      duration: 6,
      x: 200, // Move the element 200px to the right
      y: 150, // Move the element 150px down
      repeat: -1,
      yoyo: true,
      ease: 'back.inOut', // Back easing function
    });

    // Create the GSAP animation for the fourth section
    gsap.to('.moving-section-4', {
      duration: 5,
      x: -180, // Move the element 180px to the left
      y: 120, // Move the element 120px down
      repeat: -1,
      yoyo: true,
      ease: 'power4.inOut', // Power easing function
    });
  }, []);


  return (
    <div
      className='min-h-[90vh] relative bg-dark-rich_black-100 w-full flex justify-around items-center'
    >

      <section className='relative z-50 hidden sm:grid'>
        <Image src="/auth (2).png" width={340} height={500} alt='auth' />
        
        <Image src="/auth (3).png" width={340} height={500} alt='auth' />
        
        <Image src="/auth (4).png" width={340} height={500} alt='auth' />

        <section className='absolute inset-0 -z-10 bg-gradient-to-tr from-dark-rich_black-100 to-dark-amaranth_purple-600'>
        </section>
      </section>


      <section className='max-w-[300px] sm:max-w-[400px] min-h-[60vh] bg-dark-rich_black-200 z-50 ring-bg-dark-amaranth_purple-700 backdrop-blur-md '>

      <section className='h-[20vh] bg-dark-majorelle_blue-500 flex w-full items-center justify-center flex-col'>
        <Typography className='text-2xl text-dark-rich_black-100 font-bold'>
          Hello There!
        </Typography>

        <Typography className='text-md text-center text-dark-rich_black-300 font-light'>
          Create your Account to enjoy learning experience with JEHR-NEET
        </Typography>
      </section>

      <section className='py-[2rem] px-[1.6rem] min-h-[40vh] shadow-md shadow-dark-amaranth_purple-800 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 transition-all duration-300 ease-in-out'>
      <div className="relative pb-[1.2rem]">
        <Typography className='text-sm font-normal text-dark-royal_purple pb-[0.7rem]'>
          Username
        </Typography>
        <input type="text" placeholder="Shelby" className="bg-dark-rich_black-300 rounded-md py-2 px-4 w-full focus:outline-none ring-2 ring-dark-royal_purple placeholder-dark-periwinkle text-dark-majorelle_blue text-md placeholder-opacity-30" />
      </div>

      <div className="relative pb-[1.2rem]">
        <Typography className='text-sm font-normal text-dark-royal_purple pb-[0.7rem]'>
          Email
        </Typography>
        <input type="text" placeholder="xyz@gmail.com" className="bg-dark-rich_black-300 rounded-md py-2 px-4 w-full focus:outline-none ring-2 ring-dark-royal_purple placeholder-dark-periwinkle text-dark-majorelle_blue text-md placeholder-opacity-30" />
      </div>

      <div className="relative pb-[1.2rem]">
        <Typography className='text-sm font-normal pb-[0.7rem] text-dark-royal_purple'>
          Password
        </Typography>
        <input type="password" className="  bg-dark-rich_black-300 rounded-md py-2 px-4 w-full focus:outline-none ring-2 ring-dark-royal_purple placeholder-dark-periwinkle text-dark-majorelle_blue text-md" />
      </div>

          <button className='bg-dark-majorelle_blue px-5 py-2 rounded-md text-dark-periwinkle font-bold hover:bg-dark-royal_purple-600 hover:font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out w-full mt-[1.4rem]'>
            Login
          </button>

          <section className='flex flex-col gap-y-[6px] w-full px-[2.2rem] py-[1rem] justify-between items-center'>
          <Typography className='text-sm text-dark-majorelle_blue-700 cursor-pointer'>
            Don't have an Account? Sign up
          </Typography>

          <Typography className='text-sm text-red-400 cursor-pointer'>
            Forgot Password
          </Typography>
          </section>
      </section>
      </section>


      <section className='absolute w-[400px] h-[25rem] bg-gradient-to-tr from-dark-amaranth_purple-100 via-dark-rich_black-100 to-dark-amaranth_purple-700 rounded-full blur-lg bottom-0 right-0 -z-1 moving-section-1'>
        </section>

      <section className='absolute w-[400px] h-[25rem] bg-gradient-to-tr from-dark-amaranth_purple-100 via-dark-rich_black-100 to-dark-amaranth_purple-700 rounded-full blur-lg bottom-0 left-0 -z-1 moving-section-2'>
      </section>

      <section className='absolute w-[400px] h-[18rem] bg-gradient-to-tr from-dark-amaranth_purple-100 via-dark-majorelle_blue-100 to-dark-royal_purple-700 rounded-full blur-lg left-0 top-0 -z-1 rotate-30 moving-section-3'>
      </section>

      <section className='absolute w-[400px] h-[25rem] bg-gradient-to-tr from-dark-amaranth_purple-100 via-dark-rich_black-100 to-dark-amaranth_purple-700 rounded-full blur-lg bottom-50 left-50 -z-1 moving-section-4'>
      </section>

    </div>
  )
}

export default SignUp