import { ArrowRight } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <div className='min-h-screen bg-dark-rich_black-100 '>
        <section className='w-full text-center'>
        <Typography className="text-dark-amaranth_purple-700 text-3xl font-bold">
            Courses <span className='text-dark-royal_purple'>
                for you
            </span>
        </Typography>
        </section>

        <section className='w-full flex justify-center items-center flex-wrap sm:flex-row flex-col py-[3rem] gap-y-[2.4rem] gap-x-[2.9rem]'>
        <div className="w-[300px] sm:w-[350px] rounded-xl min-h-[40vh] flex-col sm:flex-row bg-dark-rich_black-300 ring-bg-dark-amaranth_purple-600 shadow-md shadow-dark-amaranth_purple-700 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-1">

          <div className="w-full flex justify-center items-center">
              <Image src="/placeholder-2.png" alt="webinar-thumbnail" className="h-full card-image rounded-none object-cover" width={200} height={300} />
          </div>

          <div className="w-full px-[1.2rem] py-[1.7rem]">
              <h2 className="text-dark-amaranth_purple-700 mb-2 uppercase text-xl font-bold">Introduction to Machine Learning</h2>
              <div className="px-2 flex py-3 justify-between items-center relative">
                  <p className="text-sm font-extralight text-dark-amaranth_purple-700 ">12 Videos</p>
                  <p className="text-md font-normal text-dark-amaranth_purple-700 ">Prof. Ranjith</p>
              </div>
              <p className="font-light text-dark-majorelle_blue-500 " style={{
                  fontSize: "11px"
              }}>Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap</p>
              <div className="w-full justify-around items-center flex">
                  <p className='text-dark-royal_purple-600 font-bold'>Rs. 388/-</p>
                  
                  <button className="bg-dark-amaranth_purple-700 text-white font-semibold flex justify-around gap-x-[10px] items-center hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-dark-royal_purple-600 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                      Register
                      <ArrowRight />
                  </button>
              </div>
          </div>
          </div>

          <div className="w-[300px] sm:w-[350px] rounded-xl min-h-[40vh] flex-col sm:flex-row bg-dark-rich_black-300 ring-bg-dark-amaranth_purple-600 shadow-md shadow-dark-amaranth_purple-700 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-1">

          <div className="w-full flex justify-center items-center">
              <Image src="/placeholder-2.png" alt="webinar-thumbnail" className="h-full card-image rounded-none object-cover" width={200} height={300} />
          </div>

          <div className="w-full px-[1.2rem] py-[1.7rem]">
              <h2 className="text-dark-amaranth_purple-700 mb-2 uppercase text-xl font-bold">Introduction to Machine Learning</h2>
              <div className="px-2 flex py-3 justify-between items-center relative">
                  <p className="text-sm font-extralight text-dark-amaranth_purple-700 ">12 Videos</p>
                  <p className="text-md font-normal text-dark-amaranth_purple-700 ">Prof. Ranjith</p>
              </div>
              <p className="font-light text-dark-majorelle_blue-500 " style={{
                  fontSize: "11px"
              }}>Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap</p>
              <div className="w-full justify-around items-center flex">
                  <p className='text-dark-royal_purple-600 font-bold'>Rs. 388/-</p>
                  
                  <button className="bg-dark-amaranth_purple-700 text-white font-semibold flex justify-around gap-x-[10px] items-center hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-dark-royal_purple-600 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                      Register
                      <ArrowRight />
                  </button>
              </div>
          </div>
          </div>

          <div className="w-[300px] sm:w-[350px] rounded-xl min-h-[40vh] flex-col sm:flex-row bg-dark-rich_black-300 ring-bg-dark-amaranth_purple-600 shadow-md shadow-dark-amaranth_purple-700 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-1">

          <div className="w-full flex justify-center items-center">
              <Image src="/placeholder-2.png" alt="webinar-thumbnail" className="h-full card-image rounded-none object-cover" width={200} height={300} />
          </div>

          <div className="w-full px-[1.2rem] py-[1.7rem]">
              <h2 className="text-dark-amaranth_purple-700 mb-2 uppercase text-xl font-bold">Introduction to Machine Learning</h2>
              <div className="px-2 flex py-3 justify-between items-center relative">
                  <p className="text-sm font-extralight text-dark-amaranth_purple-700 ">12 Videos</p>
                  <p className="text-md font-normal text-dark-amaranth_purple-700 ">Prof. Ranjith</p>
              </div>
              <p className="font-light text-dark-majorelle_blue-500 " style={{
                  fontSize: "11px"
              }}>Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap</p>
              <div className="w-full justify-around items-center flex">
                  <p className='text-dark-royal_purple-600 font-bold'>Rs. 388/-</p>
                  
                  <button className="bg-dark-amaranth_purple-700 text-white font-semibold flex justify-around gap-x-[10px] items-center hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-dark-royal_purple-600 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                      Register
                      <ArrowRight />
                  </button>
              </div>
          </div>
          </div>

          <div className="w-[300px] sm:w-[350px] rounded-xl min-h-[40vh] flex-col sm:flex-row bg-dark-rich_black-300 ring-bg-dark-amaranth_purple-600 shadow-md shadow-dark-amaranth_purple-700 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-1">

          <div className="w-full flex justify-center items-center">
              <Image src="/placeholder-2.png" alt="webinar-thumbnail" className="h-full card-image rounded-none object-cover" width={200} height={300} />
          </div>

          <div className="w-full px-[1.2rem] py-[1.7rem]">
              <h2 className="text-dark-amaranth_purple-700 mb-2 uppercase text-xl font-bold">Introduction to Machine Learning</h2>
              <div className="px-2 flex py-3 justify-between items-center relative">
                  <p className="text-sm font-extralight text-dark-amaranth_purple-700 ">12 Videos</p>
                  <p className="text-md font-normal text-dark-amaranth_purple-700 ">Prof. Ranjith</p>
              </div>
              <p className="font-light text-dark-majorelle_blue-500 " style={{
                  fontSize: "11px"
              }}>Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap</p>
              <div className="w-full justify-around items-center flex">
                  <p className='text-dark-royal_purple-600 font-bold'>Rs. 388/-</p>
                  
                  <button className="bg-dark-amaranth_purple-700 text-white font-semibold flex justify-around gap-x-[10px] items-center hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-dark-royal_purple-600 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                      Register
                      <ArrowRight />
                  </button>
              </div>
          </div>
          </div>

          <div className="w-[300px] sm:w-[350px] rounded-xl min-h-[40vh] flex-col sm:flex-row bg-dark-rich_black-300 ring-bg-dark-amaranth_purple-600 shadow-md shadow-dark-amaranth_purple-700 hover:shadow-lg hover:shadow-dark-amaranth_purple-700 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-1">

          <div className="w-full flex justify-center items-center">
              <Image src="/placeholder-2.png" alt="webinar-thumbnail" className="h-full card-image rounded-none object-cover" width={200} height={300} />
          </div>

          <div className="w-full px-[1.2rem] py-[1.7rem]">
              <h2 className="text-dark-amaranth_purple-700 mb-2 uppercase text-xl font-bold">Introduction to Machine Learning</h2>
              <div className="px-2 flex py-3 justify-between items-center relative">
                  <p className="text-sm font-extralight text-dark-amaranth_purple-700 ">12 Videos</p>
                  <p className="text-md font-normal text-dark-amaranth_purple-700 ">Prof. Ranjith</p>
              </div>
              <p className="font-light text-dark-majorelle_blue-500 " style={{
                  fontSize: "11px"
              }}>Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap</p>
              <div className="w-full justify-around items-center flex">
                  <p className='text-dark-royal_purple-600 font-bold'>Rs. 388/-</p>
                  
                  <button className="bg-dark-amaranth_purple-700 text-white font-semibold flex justify-around gap-x-[10px] items-center hover:font-bold px-4 py-2 mt-2 ms-[1rem] shadow-lg hover:bg-dark-royal_purple-600 hover:translate-x-3 hover:scale-105 transition-all duration-200 ease-in-out">
                      Register
                      <ArrowRight />
                  </button>
              </div>
          </div>
          </div>
        </section>
    </div>
  )
}

export default Courses