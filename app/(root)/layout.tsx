import Foot from '@/components/footer/foot'
import Nav from '@/components/navbar/nav'
import React from 'react'

const HomePages = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
      <Nav />
        {children}
      <Foot />
    </div>
  )
}

export default HomePages