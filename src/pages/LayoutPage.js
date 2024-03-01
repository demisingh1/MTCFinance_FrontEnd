import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPage = () => {
  return (
    <div className='flex flex-row container bg-slate-400 mx-auto' >
        <Navbar />
        <Outlet />
    </div>
  )
}

export default LayoutPage