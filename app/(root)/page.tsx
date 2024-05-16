import About from '@/components/home/about'
import Courses from '@/components/home/courses'
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Webinars from '@/components/home/webinars'
import React from 'react'

const Pages = () => {
  return (
    <div>
         <Hero />
        <Features />
        <Courses />
        <Webinars />
        <About />
    </div>
  )
}

export default Pages