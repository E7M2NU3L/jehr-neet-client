import React from 'react'
import Image from 'next/image'
 
const About = () => {
  return (
    <div className='bg-dark-rich_black-100 px-[2rem] sm:px-0'>
      <section className='flex flex-col justify-center items-center gap-x-[3rem] pb-[2rem]'>
        <main className='flex justify-center pt-[2rem] sm:flex-row flex-col items-center w-full gap-x-[3rem]'>
          <h3 className='text-4xl sm:text-5xl font-bold max-w-[25rem] text-dark-amaranth_purple-700'>
            Jehr-Neet:  <span className='text-dark-royal_purple-700'>Our Aim is to Provide Knowledge in a right way 
            </span></h3>

          <section>
            <Image src='/placeholder-2.png' alt='about' className='' width={300} height={500} />
          </section>
        </main>

        <main className='flex flex-col sm:flex-row justify-center items-center gap-x-[5rem] pb-[2rem] px-[3rem]'>
          <section className='max-w-[25rem]'>
            <p className='font-semibold text-dark-periwinkle-700'>
              Jehr Solutions is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
            </p>
          </section>

          <section className='flex justify-around items-center gap-x-[1rem] sm:gap-x-[2rem] py-[2rem] sm:py-0'>
            <div className='bg-dark-rich_black-300 shadow-md shadow-dark-amaranth_purple-700 px-4 py-2'>
              <h1 className='text-2xl font-bold text-dark-royal_purple-700'>
                50 +
              </h1>
              <h6 className='text-lg font-semibold text-dark-majorelle_blue-500'>
                Workshops
              </h6>
            </div>
            <div className='bg-dark-rich_black-300 shadow-md shadow-dark-amaranth_purple-700  px-4 py-2'>
              <h1 className='text-2xl font-bold text-dark-royal_purple-700'>
                Top
              </h1>
              <h6 className='text-lg font-semibold text-dark-majorelle_blue-500'>
                Courses
              </h6>
            </div> <div className='bg-dark-rich_black-300 shadow-md shadow-dark-amaranth_purple-700  px-4 py-2'>
              <h1 className='text-2xl font-bold text-dark-royal_purple-700'>
                Best
              </h1>
              <h6 className='text-lg font-semibold text-dark-majorelle_blue-500'>
                Learning
              </h6>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}

export default About