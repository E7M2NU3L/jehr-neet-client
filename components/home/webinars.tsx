import { DateRange, Timelapse } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Webinars = () => {
  return (
    <div className='min-h-screen bg-dark-rich_black-100 '>
        <section className='w-full text-center'>
        <Typography className="text-dark-amaranth_purple-700 text-3xl font-bold">
            Upcoming <span className='text-dark-royal_purple'>
                Webinars
            </span>
        </Typography>
        </section>

        <section className='w-full flex justify-center items-center flex-wrap sm:flex-row flex-col py-[3rem] gap-y-[2.4rem] gap-x-[2.9rem]'>
          <div className='w-[280px] sm:w-[320px] min-h-[25rem] bg-dark-rich_black-400 hover:shadow-dark-royal_purple-700 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out'>
          <Image src="/placeholder-2.png" alt='placeholder' className='w-full object-fit h-[14rem]' width={400} height={300} />
          
          <section className='flex flex-col justify-center items-center w-full h-full px-[1rem] py-[1rem] text-center'>
              <Typography variant='h6' className='font-semibold text-dark-amaranth_purple-700'>
                  Machine Learning tools for HRM
              </Typography>

              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <Timelapse />
                      <h1 className='font-semibold text-md'>
                          3 hrs
                      </h1>
                  </div>

                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <DateRange />
                      <h1 className='font-semibold text-md'>
                          Feb 22, 2024
                      </h1>
                  </div>
              </div>

              <section className='mt-1'>
              <Divider className='w-[90px] mx-auto bg-dark-5' />
              </section>

              <Typography className='font-light text-[12px] pt-1 text-dark-4 text-dark-majorelle_blue-700'>
              Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
              </Typography>

              <section className='flex w-full justify-around items-center pt-2'>
                  <button className='bg-dark-majorelle_blue-500 text-dark-periwinkle-900 font-semibold px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out'>
                      Register
                  </button>
              </section>
              </section>
          </div>

          <div className='w-[280px] sm:w-[320px] min-h-[25rem] bg-dark-rich_black-400 hover:shadow-dark-royal_purple-700 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out'>
          <Image src="/placeholder-2.png" alt='placeholder' className='w-full object-fit h-[14rem]' width={400} height={300} />
          
          <section className='flex flex-col justify-center items-center w-full h-full px-[1rem] py-[1rem] text-center'>
              <Typography variant='h6' className='font-semibold text-dark-amaranth_purple-700'>
                  Machine Learning tools for HRM
              </Typography>

              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <Timelapse />
                      <h1 className='font-semibold text-md'>
                          3 hrs
                      </h1>
                  </div>

                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <DateRange />
                      <h1 className='font-semibold text-md'>
                          Feb 22, 2024
                      </h1>
                  </div>
              </div>

              <section className='mt-1'>
              <Divider className='w-[90px] mx-auto bg-dark-5' />
              </section>

              <Typography className='font-light text-[12px] pt-1 text-dark-4 text-dark-majorelle_blue-700'>
              Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
              </Typography>

              <section className='flex w-full justify-around items-center pt-2'>
                  <button className='bg-dark-majorelle_blue-500 text-dark-periwinkle-900 font-semibold px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out'>
                      Register
                  </button>
              </section>
              </section>
          </div>

          <div className='w-[280px] sm:w-[320px] min-h-[25rem] bg-dark-rich_black-400 hover:shadow-dark-royal_purple-700 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out'>
          <Image src="/placeholder-2.png" alt='placeholder' className='w-full object-fit h-[14rem]' width={400} height={300} />
          
          <section className='flex flex-col justify-center items-center w-full h-full px-[1rem] py-[1rem] text-center'>
              <Typography variant='h6' className='font-semibold text-dark-amaranth_purple-700'>
                  Machine Learning tools for HRM
              </Typography>

              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <Timelapse />
                      <h1 className='font-semibold text-md'>
                          3 hrs
                      </h1>
                  </div>

                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <DateRange />
                      <h1 className='font-semibold text-md'>
                          Feb 22, 2024
                      </h1>
                  </div>
              </div>

              <section className='mt-1'>
              <Divider className='w-[90px] mx-auto bg-dark-5' />
              </section>

              <Typography className='font-light text-[12px] pt-1 text-dark-4 text-dark-majorelle_blue-700'>
              Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
              </Typography>

              <section className='flex w-full justify-around items-center pt-2'>
                  <button className='bg-dark-majorelle_blue-500 text-dark-periwinkle-900 font-semibold px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out'>
                      Register
                  </button>
              </section>
              </section>
          </div>

          <div className='w-[280px] sm:w-[320px] min-h-[25rem] bg-dark-rich_black-400 hover:shadow-dark-royal_purple-700 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out'>
          <Image src="/placeholder-2.png" alt='placeholder' className='w-full object-fit h-[14rem]' width={400} height={300} />
          
          <section className='flex flex-col justify-center items-center w-full h-full px-[1rem] py-[1rem] text-center'>
              <Typography variant='h6' className='font-semibold text-dark-amaranth_purple-700'>
                  Machine Learning tools for HRM
              </Typography>

              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <Timelapse />
                      <h1 className='font-semibold text-md'>
                          3 hrs
                      </h1>
                  </div>

                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <DateRange />
                      <h1 className='font-semibold text-md'>
                          Feb 22, 2024
                      </h1>
                  </div>
              </div>

              <section className='mt-1'>
              <Divider className='w-[90px] mx-auto bg-dark-5' />
              </section>

              <Typography className='font-light text-[12px] pt-1 text-dark-4 text-dark-majorelle_blue-700'>
              Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
              </Typography>

              <section className='flex w-full justify-around items-center pt-2'>
                  <button className='bg-dark-majorelle_blue-500 text-dark-periwinkle-900 font-semibold px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out'>
                      Register
                  </button>
              </section>
              </section>
          </div>

          <div className='w-[280px] sm:w-[320px] min-h-[25rem] bg-dark-rich_black-400 hover:shadow-dark-royal_purple-700 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out'>
          <Image src="/placeholder-2.png" alt='placeholder' className='w-full object-fit h-[14rem]' width={400} height={300} />
          
          <section className='flex flex-col justify-center items-center w-full h-full px-[1rem] py-[1rem] text-center'>
              <Typography variant='h6' className='font-semibold text-dark-amaranth_purple-700'>
                  Machine Learning tools for HRM
              </Typography>

              <div className='w-full flex justify-between items-center'>
                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <Timelapse />
                      <h1 className='font-semibold text-md'>
                          3 hrs
                      </h1>
                  </div>

                  <div className='flex gap-x-[0.5rem] text-dark-amaranth_purple-700'>
                      <DateRange />
                      <h1 className='font-semibold text-md'>
                          Feb 22, 2024
                      </h1>
                  </div>
              </div>

              <section className='mt-1'>
              <Divider className='w-[90px] mx-auto bg-dark-5' />
              </section>

              <Typography className='font-light text-[12px] pt-1 text-dark-4 text-dark-majorelle_blue-700'>
              Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
              </Typography>

              <section className='flex w-full justify-around items-center pt-2'>
                  <button className='bg-dark-majorelle_blue-500 text-dark-periwinkle-900 font-semibold px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out'>
                      Register
                  </button>
              </section>
              </section>
          </div>
        </section>
    </div>
  )
}

export default Webinars