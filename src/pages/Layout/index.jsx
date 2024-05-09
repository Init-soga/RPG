import React from 'react'
import { Outlet } from 'react-router-dom'
import Ficha from '../../components/Ficha'

const Layout = () => {
  return (
    <div className='bg-[#010A13] min-h-screen max-w-[100%]'>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
