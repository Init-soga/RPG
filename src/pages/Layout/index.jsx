import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-[#010A13] min-h-screen'>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
