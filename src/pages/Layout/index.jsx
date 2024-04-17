import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-[#091428] to-[#0A1428] min-h-screen'>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
