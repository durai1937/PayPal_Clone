import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { RiBankFill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

const AccSecCon = ({customClass}) => {
  return (
    <div>
        <div className={`${customClass} flex flex-col`}>
            <div className='md:flex md:flex-row  bg-[#fff9f2]'>
                <div className='!px-4 w-full'>
                    <div className='bg-[#ffffff] !mx-auto rounded-xl !mt-10 !py-auto !px-auto flex border'>
                        <IoIosInformationCircle  className='w-7 h-7 !my-auto !mx-4'/>
                        <div className='flex flex-col !my-4 '>
                            <h1 className=' text-lg font-semibold text-gray-700 '>Get Paid</h1>
                            <p className='font-semibold text-sm text-gray-600'>Verify Your account to accept payments from overseas customers </p>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] !mx-auto !mt-4  border rounded-2xl'>
                        <div className='!my-4 !mx-4 font-[Poppins]'>
                            <h1 className='font-bold text-[17px]  !my-3 '>Recent activity</h1>
                            <p className='text-lg !pb-4'>See when funds come in and go out. You can find your recent PayPal activity here.</p>
                            <a className='font-bold text-[#0573da] hover:underline'>Show all</a>
                        </div>
                    </div>
                </div>

                <div className='md:bg-[#fff] md:w-full'>
                    
                    <div className='bg-[#ffffff] !mx-auto rounded-xl !mt-10 !py-auto !px-auto  hidden md:block'>
                        <div className='flex !my-6 !mx-9 '>
                            <button className='cursor-pointer bg-[#012169] text-lg text-white rounded-full !py-2 !px-auto md:!px-18 font-bold !mx-4'>Send</button>
                            <button className='cursor-pointer bg-[#012169] text-lg text-white rounded-full !py-2 !px-auto md:!px-18 font-bold !mx-4'>Request</button>
                        </div>
                        <div className='flex  items-center !my-5 '>
                            <div className='flex flex-col items-center  cursor-pointer hover:underline !mx-21'>
                                <RiBankFill className='hover:bg-[#fff9f2]  w-16 h-16 !px-4 !py-4 bg-[#fff9f2] text-[#012169] rounded-full'/>
                                <h1>Add card or bank</h1>
                            </div>
                            <div className='flex flex-col items-center  cursor-pointer hover:underline !mx-21'>
                                <IoMdMore className='hover:bg-[#fff9f2]  w-16 h-16 text-[#012169] bg-[#fff9f2] rounded-full !px-4 !py-4'/>
                                <h1>More</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div className='bg-white !mx-auto h-[15rem] md:h-auto !mt-13 !px-auto flex flex-col'>
                        <span className='flex justify-between items-center !mx-5 !mt-4'>
                            <h1 className='font-[Poppins] text-[19px] font-semibold text-gray-800 '>Send again</h1> 
                            <IoMdMore className='w-8 h-8 text-gray-400'/>
                        </span>
                        <div className='!mx-5 !mt-5'>
                            <IoMdSearch  className='bg-[#012169] text-white w-11 h-11 md:w-15 md:h-15 font-normal rounded-full !px-2 !py-2'/>
                            <h1 className='!mt-2 hover:underline'>Search</h1>
                        </div>
                    </div>
                    <div className='bg-white !mx-auto !mt-10 !mb-4 !py-5 !px-auto'>
                        <div className='flex justify-between items-center !mx-5'>
                            <h1 className='font-bold text-lg ' >Banks and cards</h1>
                            <IoMdMore className='w-8 h-8 text-gray-400'/>
                        </div>
                        <div className='!mx-5 !mt-4 flex items-center hover:bg-[#fff9f2] cursor-pointer rounded-2xl !py-5 !px-3'>
                            <RiBankFill className=' bg-[#fff9f2] text-[#012169] w-13 h-13 font-normal rounded-full !px-2 !py-2 '/>
                            <h1 className='font-semibold !mx-4 text-lg'>Add Card or bank</h1>
                        </div>
                        <h1 className='font-bold text-lg text-[#0573da] !mx-5 !mt-10 hover:underline'>Link a Card or Bank Account</h1>
                    </div>
                </div>
            </div>

            <div className='!my-3 !mb-12 bg-[#fff9f2] '>
                <div className='drop-shadow-lg  bg-white flex flex-col md:flex md:flex-row md:!pl-50 items-center !py-5'>
                    <img className='w-30' src="./src/assets/paypallong.svg" alt="" />
                    <ul className='flex flex-col md:felx md:flex-row !mt-2'>
                        <li className='hover:underline !py-3 font-semibold text-lg md:!px-8'>Help</li>
                        <li className='hover:underline !py-3 font-semibold text-lg md:!px-8'>Contact</li>
                        <li className='hover:underline !py-3 font-semibold text-lg md:!px-8'>Security</li>
                    </ul>
                </div>
                <div className='drop-shadow-lg  bg-white flex flex-col md:flex md:flex-row md:!pl-50 items-center !pt-5 !mt-2 !mb-43 md:!mb-15'>
                    <p className='text-gray-600'>©1999-2025 PayPal, Inc. All rights reserved.</p>
                    <ul className='md:flex'>
                        <li className='hover:underline !py-3 md:!py-0 font-semibold text-md md:!px-8'>Privacy</li>
                        <li className='hover:underline !py-3 md:!py-0 font-semibold text-md md:!px-8'>Cookies</li>
                        <li className='hover:underline !py-3 md:!py-0 font-semibold text-md md:!px-8'>Legal</li>
                    </ul>
                </div>
            </div>

            <div className=' bg-[#ffffff] !mx-auto rounded-xl !py-auto !px-auto  fixed bottom-0 right-0 left-0 md:hidden'>
                <div className='flex justify-evenly items-center !mx-5 !my-5 '>
                    <div className='flex flex-col items-center  cursor-pointer hover:underline'>
                        <RiBankFill className='hover:bg-[#fff9f2]  w-13 h-13 !px-3 !py-3 bg-[#fff9f2] text-[#012169] rounded-full'/>
                        <h1>Add card or bank</h1>
                    </div>
                    <div className='flex flex-col items-center  cursor-pointer hover:underline'>
                        <IoMdMore className='hover:bg-[#fff9f2]  w-12 h-12 text-[#012169] bg-[#fff9f2] rounded-full !px-1 !py-1'/>
                        <h1>More</h1>
                    </div>
                </div>
                <div className='flex justify-between !my-4 '>
                    <button className='cursor-pointer bg-[#012169] text-lg text-white rounded-full !py-2 !px-20 font-bold !mx-2'>Send</button>
                    <button className='cursor-pointer bg-[#012169] text-lg text-white rounded-full !py-2 !px-20 font-bold !mx-2'>Request</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AccSecCon
