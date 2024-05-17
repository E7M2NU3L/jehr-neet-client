import { Typography } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <div className='h-full py-[3rem] bg-dark-rich_black-100'>
        
        <Typography className='text-dark-amaranth_purple-800 text-2xl font-medium text-center py-[2.2rem]'>
            It's as simple as <span className='text-dark-royal_purple text-3xl font-bold'>That!</span>
        </Typography>
 
        <section className='flex justify-center items-center flex-wrap gap-x-[2rem] gap-y-[3rem] sm:gap-y-0 flex-col sm:flex-row'>

            <div className={`flex flex-col justify-around items-start w-[300px] sm:w-[400px] ring-dark-amaranth_purple-700 rounded-lg ring-1 px-[1rem] py-[1.3rem] shadow-dark-amaranth_purple-700 shadow-md hover:translate-x-1 hover:scale-95 hover:shadow-lg transition-all duration-300 ease-in-out`}>
                <Typography className='text-2xl font-bold text-dark-amaranth_purple-600 pb-[1.2rem]'>
                Unlock Your Potential with <span className='text-dark-royal_purple'>Personalized Support</span>
                </Typography>

                <Typography className='text-sm font-light text-dark-royal_purple-800 pb-[2.2rem]'>
                Join our exclusive discussion forum for direct interaction with instructors, access to a secure vault of study materials, and engaging quizzes. Elevate your learning experience with personalized guidance.
                </Typography>

                <button className='bg-dark-majorelle_blue px-4 py-2 rounded-md hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-br hover:from-dark-royal_purple-500 hover:via-dark-majorelle_blue-700 hover:to-dark-periwinkle-600 transition-all duration-300 ease-in-out font-semibold hover:font-bold'>
                Join Now
                </button>
            </div>

            <div className={`flex flex-col justify-around items-start w-[300px] sm:w-[400px] bg-dark-amaranth_purple-600 ring-dark-amaranth_purple-700 rounded-lg ring-1 px-[1rem] py-[1.3rem] scale-105 shadow-dark-amaranth_purple-700 shadow-md hover:translate-x-1 hover:scale-95 hover:shadow-lg transition-all duration-300 ease-in-out`}>
                <Typography className='text-2xl font-bold text-dark-rich_black-100 pb-[1.2rem]'>
                Stay Ahead with Dynamic Webinars
                </Typography>

                <Typography className='text-sm font-light text-dark-royal_purple-800 pb-[2.2rem]'>
                Participate in our regular, free webinars designed to keep you engaged and informed. Dive deep into topics, interact with experts, and stay connected with the latest trends.
                </Typography>

                <button className='bg-dark-rich_black-100 px-4 py-2 text-dark-periwinkle-600
                rounded-md hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-br hover:from-dark-rich_black-500 hover:via-dark-amaranth_purple-300 hover:to-dark-periwinkle-100 transition-all duration-300 ease-in-out font-semibold hover:font-bold'>
                Free Webinars
                </button>
            </div>

            <div className={`flex flex-col justify-around items-start w-[300px] sm:w-[400px] ring-dark-amaranth_purple-700 rounded-lg ring-1 px-[1rem] py-[1.3rem] shadow-dark-amaranth_purple-700 shadow-md hover:translate-x-1 hover:scale-95 hover:shadow-lg transition-all duration-300 ease-in-out`}>
                <Typography className='text-2xl font-bold text-dark-amaranth_purple-600 pb-[1.2rem]'>
                Empowering Learning with Interactivity
                </Typography>

                <Typography className='text-sm font-light text-dark-royal_purple-800 pb-[2.2rem]'>
                Experience an interactive learning platform that simplifies complex topics and teaches valuable shortcuts for problem-solving. Learn from skilled professionals and master NEET with confidence.
                </Typography>

                <button className='bg-dark-majorelle_blue px-4 py-2 rounded-md hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-br hover:from-dark-royal_purple-500 hover:via-dark-majorelle_blue-700 hover:to-dark-periwinkle-600 transition-all duration-300 ease-in-out font-semibold hover:font-bold'>
                Explore
                </button>
            </div>
        </section>
        <section>
        </section>
    </div>
  )
}

export default Features