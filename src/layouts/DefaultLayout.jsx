import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const DefaultLayout = () => {
  return (
    <>

        <header>
            <Header />
        </header>

        <div>
            <Outlet />
        </div>
    
    </>
  )
}

export default DefaultLayout