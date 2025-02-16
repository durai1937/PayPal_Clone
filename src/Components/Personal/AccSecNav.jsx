import React, {useState} from 'react'
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSettings5Fill } from "react-icons/ri";
import AccSecCon from './AccSecCon';

const AccSecNav = () => {
    const [isOpen, setOpen] = useState(false)

  return (
    <div>
        {/* Mobile View */}
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-65" : "translate-x-0"} `}>
            <nav className='flex justify-between items-center bg-[#012169] !py-5 !px-5 md:hidden'>
                <GiHamburgerMenu onClick={() => setOpen(!isOpen)} className='text-[#d3f3ff] w-5 h-5 cursor-pointer'/>
                <div className='flex'>
                    <img className='' src="./src/assets/paypal.png" alt="" />
                </div>

                <div className=' '>
                    <IoNotifications className='text-[#d3f3ff] w-6 h-6 cursor-pointer '/>  
                </div>
            </nav>
        </div>
        

        <div className={`fixed top-0 left-0 h-full transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-50"}`}>
            {isOpen && (
                <div className='bg-[#012169] text-[#d3f3ff] w-65'>
                    <div className='flex !pt-9 !px-4'>
                        <a className='!pr-33 font-semibold'>LOG OUT</a>
                        <RiSettings5Fill className=' w-6 h-6 '/>
                    </div>
                    <ul className='!mx-5 text-xl font-semibold !pt-9'>
                        <li className='!py-4 !px-2'>Home</li>
                        <li className='!py-4 !px-2'>Send and Request</li>
                        <li className='!py-4 !px-2'>Payment Methods</li>
                        <li className='!py-4 !px-2'>Activity</li>
                        <li className='!py-4 !px-2'>Help</li>
                    </ul>
                </div>
            )}
        </div>
        <AccSecCon customClass='block md:hidden'/>

        {/* Desktop View*/}
        <div>
            <nav className='md:flex md:items-center md:bg-[#012169] md:!py-5 md:!px-5 hidden'>
                <div className='md:flex md:!ml-auto'>
                    <img className='w-10 h-10' src="./src/assets/paypal.png" alt="" />
                </div>

                <ul className='md:flex md:!mx-7'>
                    <li className='md:!py-2 md:!px-5 font-semibold md:text-[#d3f3ff] hover:outline rounded-full'>Home</li>
                    <li className='md:!py-2 md:!px-5 font-semibold md:text-[#d3f3ff] hover:outline rounded-full'>Send and Request</li>
                    <li className='md:!py-2 md:!px-5 font-semibold md:text-[#d3f3ff] hover:outline rounded-full'>Payment Methods</li>
                    <li className='md:!py-2 md:!px-5 font-semibold md:text-[#d3f3ff] hover:outline rounded-full'>Activity</li>
                    <li className='md:!py-2 md:!px-5 font-semibold md:text-[#d3f3ff] hover:outline rounded-full'>Help</li>
                </ul> 

                <div className='md:flex md:gap-5  md:!mx-auto'>
                    <IoNotifications className='md:text-[#d3f3ff] md:w-6 md:h-6 md:cursor-pointer '/>  
                    <RiSettings5Fill className='md:text-[#d3f3ff] md:w-6 md:h-6 md:cursor-pointer'/>
                    <a className='md:text-[#d3f3ff]'>LOG OUT</a>
                </div>
            </nav>
        </div>
        <AccSecCon customClass='hidden md:block'/>
    </div>
  )
}

export default AccSecNav