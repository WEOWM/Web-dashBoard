import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbSpeedboat } from "react-icons/tb";

const DropDown = ({ icon, MainMenu, submenu }) => {
    console.log(MainMenu,"jbnfjnf");
    
    const [isselect, setIsselect ]=useState(false)

    const HandleSelect =()=>{
        setIsselect(!isselect)
        
        
    }
  return (
    <div className="w-full py-3 flex justify-center flex-col bg-gray-700">
      <div onClick={HandleSelect} className="flex justify-start pl-2 gap-3 items-center text-[20px] cursor-pointer ">
        <IoIosArrowDown  className={`${isselect? "rotate-180 ": null} ${submenu ? "visible" : "invisible"} transition-all ease-in-out duration-500`} />
        {MainMenu.icon}
        <p>{MainMenu?.title}</p>
      </div>

    {
        submenu?.map((sub, idx)=>{
            return(
                <div className={`${isselect ? "max-h-10": "max-h-0"} w-full  flex items-center gap-3  pl-24 bg-green-600 transition-all ease-in-out duration-500`}>
                <TbSpeedboat className={`${isselect ? "block" : "hidden"}`}  />
                <p className={`${isselect ? "block" : "hidden"}`} >{sub?.submenu}</p>
              </div>
            )
        })
    }
    </div>
  );
};

export default DropDown;
