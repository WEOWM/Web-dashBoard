import React from 'react'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

const Default = () => {
  return (
    <div className='flex '>
        <SideBar/>
        <div className='w-full pl-[20%]'>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default Default
