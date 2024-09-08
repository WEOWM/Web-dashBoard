import React from 'react'
import DropDown from './DropDown'
import { IoIosSpeedometer } from "react-icons/io";

const SideBar = () => {
    const sidebar = [ 
        {
            title:"Dashboard",
            submenu:[
                {
                    submenu:"name",
                    path:"/ss",
                    icon:<IoIosSpeedometer />
                },
                {
                    submenu:"name2",
                    path:"/ss",
                    icon:<IoIosSpeedometer />
                },
                {
                    submenu:"name3",
                    path:"/ss",
                    icon:<IoIosSpeedometer />
                },
            ]
        },
        {
            title:"Wigets",
            submenu:null
        }
        
        
    ]
  return (
    <div className='w-[20%] h-screen bg-[#003366] fixed'>
        <div className='w-full h-20 bg-[#011e3b]'>
            
        </div>
        <div className='h-44 bg-black flex justify-center items-center'>
            <div className='flex items-center gap-3'>
                <div className='w-16 h-16 bg-red-800 rounded-full'>
                    <img className='w-16 h-16 object-cover rounded-full' src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='text-white'>
                    <span>basim Shareef</span>
                </div>
            </div>

        </div>

        <div className='h-[33.4rem] bg-blue-600 flex flex-col overflow-y-auto'>
        {
            sidebar.map((item,idx)=>
                <DropDown MainMenu={item} icon={<IoIosSpeedometer />} submenu={item.submenu} />
            )
        }
           

        </div>
      
    </div>
  )
}

export default SideBar
