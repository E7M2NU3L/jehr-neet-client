import Nav from '@/components/navbar/nav'
import React from 'react'

const Auth = () => ({children} : {children : React.ReactNode}) => {
    return (
      <div>
          <Nav />
          {children}
      </div>
    )
  }

export default Auth