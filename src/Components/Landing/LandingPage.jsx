import React from 'react'
import {useState} from 'react';
import Carousel from './Carousel'
import LandingCantent from './LandingCantent';
import {useNavigate} from 'react-router-dom'


const LandingPage = () => {
    const [isPrimary, setPrimary] = useState(false);
    const [isSecondry, setSecondry] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown))
    };
    
  return (
    <div>
        {/* Mobile view */}
        <div className={`transition-transform duration-300 ease-in-out ${isPrimary ? "translate-x-50" : "translate-x-0"}`}>
            <section className=' !p-3 flex relative lg:hidden'>
                <button className='cursor-pointer flex font-medium text-sm !px-2 !py-2 !my-auto !mx-10  border border-[#0079C1] text-[#0079C1] rounded-full' onClick={() => setPrimary(!isPrimary)}> 

                    <svg className={ isPrimary && `${'hidden'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#0079C1"} fill={"none"}>
                        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {isPrimary && (
                        <svg className='!mt-[2px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#0079C1"} fill={"none"}>
                            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    <span className='!ml-2'>Menu</span>
                </button>
                <div className='w-8 !my-auto !mx-auto '>
                    <img src="./src/assets/paypal.svg" alt="" />
                </div>
                <button onClick={()=> navigate('/Login')} className=' cursor-pointer font-medium text-sm !px-5 !py-2 !mx-10 border border-[#0079C1] text-[#0079C1] rounded-full '>
                    Log In
                </button>
            </section>
             <Carousel customClass='block md:hidden'/> 
             <LandingCantent customClass='block md:hidden'/>
        </div>
    
        <div className={` fixed top-0 left-0 h-full w-50 bg-white transition-transform duration-300 ${isPrimary ? "translate-x-0" : "-translate-x-50"} `}>

            {isPrimary === true && (
                <ul className='bg-[#012169] !mt-16 h-full text-white font-semibold '>
                    <li onClick={() => setSecondry("slide1") } className='!px-3 !py-3 cursor-pointer flex hover:underline decoration-solid'>
                        INDIVIDUAL
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width=  {24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <li onClick={() => setSecondry("slide2")} className='!px-3 !py-3 cursor-pointer flex hover:underline decoration-solid'>
                        BUSINESS
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width=  {24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <li onClick={() => setSecondry("slide3")} className='!px-3 !py-3 cursor-pointer flex hover:underline decoration-solid'>
                        PARTNERS
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width=  {24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <li onClick={() => setSecondry("slide4")} className='!px-3 !py-3 cursor-pointer flex hover:underline decoration-solid'>
                        USEFUL INFO
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width=  {24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </li>
                    <hr className='w-40 !ml-3 !mt-3 border-gray-500'/>
                    <button onClick={()=> navigate('/AccountSelection')} className='border border-white !px-10 !py-2 rounded-4xl !mt-20 cursor-pointer !mx-6'>Sign Up</button>
                 </ul>
            )}
        
        
        </div>

        <div className={` fixed top-0 left-0 h-full w-50 transition-transform duration-300 ${isSecondry ? "translate-x-0" : "-translate-x-50"} `}>
            { isSecondry === "slide1" && (
                <ul className='bg-[#012169] !mt-16 h-full text-white font-semibold  ' >
                    <h3 onClick={() => setSecondry(null)} className='flex !pl-1 !pt-3 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        INDIVIDUAL
                    </h3>
                    <li className='!px-3 !py-3 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Individual Home</li>
                    <li className='!px-3 !py-3 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Buyer Protection</li>
                    <li className='!px-3 !py-3 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Shop with PayPal</li>
                    <li className='!px-3 !py-3 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Getting Started</li>
                </ul>
            )}

            {isSecondry === "slide2" &&(
                <ul className='bg-[#012169] !mt-16 h-full text-white font-semibold '>
                    <h3 onClick={() => setSecondry(null)} className='flex !pl-1 !pt-3 cursor-pointer'>
                    <svg class xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        BUSINESS
                    </h3>
                    
                    <h4 className='text-[14px] font-light !ml-2 !mt-7'>SMALL-TO-MEDIUM BUSINESS</h4>
                    <hr className='w-43 !ml-3 !mt-1 border-gray-500'/>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Introduction</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Getting Started</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Solution</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Accept Payments</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Make Payments</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Manage Risk</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Accelerate Growth</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Streamkine Operation</li>

                    <h4 className='text-[14px] font-light !ml-2 !mt-7'>ENTERPRISE</h4>
                    <hr className='w-40 !ml-3 !mt-1 border-gray-500'/>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Introduction</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Marketplaces & Partners</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Platform & Solution</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Accept Payments</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Make Payments</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Manage Risk</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Accelerate Growth</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Streamkine Operation</li>

                    <h4 className='text-[14px] font-light !ml-2 !mt-7'>MORE</h4>
                    <hr className='w-40 !ml-3 !mt-1 border-gray-500'/>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Pricing</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Business Resource Centre</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Identy Verification(KYC)</li>

                </ul>
            )}

            {isSecondry === "slide3" && (
                <ul className='bg-[#012169] !mt-16 h-full text-white font-semibold '>
                    <h3 onClick={() => setSecondry(null)} className='flex !pl-1 !pt-3 cursor-pointer'>
                    <svg class xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        PARTNERS
                    </h3>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Partner With Us</li>
                    <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Partner Directory</li>
                </ul>
            )}

            {isSecondry === "slide4" && (
                <ul className='bg-[#012169] !mt-16 h-full text-white font-semibold '>
                <h3 onClick={() => setSecondry(null)} className='flex !pl-1 !pt-3 cursor-pointer'>
                    <svg class xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                        <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                        USEFUL INFO
                    </h3>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Online Security</li>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Fraud Prevention</li>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Phishing</li>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>PCI Compliance</li>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Foreign Inward Remittance advise(FIRA)</li>
                <li className='!px-3 !py-2 text-[14px] cursor-pointer flex hover:underline decoration-solid'>Help Centre</li>
            </ul>
            )}
        </div>
        {/* Desktop view */}
        <nav className='w-full h-20 !mx-auto lg:flex items-center hidden '>
            <div className='w-35 !ml-90 md:!mx-auto '>
                <img src="./src/assets/paypallong.svg" alt="" />
            </div>
            <div className='!mx-auto'>
                <ul className='flex !mx-auto'>
                    <li onClick={() => toggleDropdown("INDIVIDUAL")} className='!pl-8 cursor-pointer font-medium '>INDIVIDUAL</li>
                    <li onClick={() => toggleDropdown("BUSINESS")} className='!pl-8 cursor-pointer font-medium'>BUSINESS</li>
                    <li onClick={() => toggleDropdown("PARTNERS")} className='!pl-8 cursor-pointer font-medium'>PARTNERS</li>
                    <li onClick={() => toggleDropdown("USEFUL INFO")} className='!pl-8 cursor-pointer font-medium'>USEFUL INFO</li>
                </ul>
            </div>
            <div className='!mr-90 md:!mx-auto'>
                <button onClick={()=> navigate('/Login')} className=' border border-[#0079C1] text-[#0079C1] cursor-pointer rounded-4xl !px-5 !py-2 !mx-3 font-medium text-sm'>
                    Log In
                </button>
                <button onClick={()=> navigate('./AccountSelection')} className=' bg-[#0079C1] text-[#fff] cursor-pointer rounded-4xl !px-5 !py-2 font-medium text-sm'>
                    Sign Up
                </button>
            </div>

            {openDropdown === "INDIVIDUAL" && (
                <div className= 'flex items-center absolute top-20 right-90 translate-x-90  w-screen h-40 bg-[#002395] text-white z-1'>
                    <div className='flex flex-wrap gap-8 w-[40rem] !ml-120'>
                        <div className='cursor-pointer  hover:underline decoration-solid'>
                            <h5 className='font-semibold text-md '>Individual Home</h5>
                            <p className='text-sm '>Learn about shopping with PayPal</p>
                        </div>

                        <div className='cursor-pointer  hover:underline decoration-solid'>
                            <h5 className='font-semibold text-md '>Buyer Protection</h5>
                            <p className='text-sm '>How we protect your purchases</p>
                        </div>

                        <div className='cursor-pointer  hover:underline decoration-solid'>
                            <h5 className='font-semibold text-md '>Shop with PayPal</h5>
                            <p className='text-sm  '>Use PayPal in india & worldewide</p>
                        </div>

                        <div className='cursor-pointer hover:underline decoration-solid'>
                            <h5 className='font-semibold text-md'>Getting Started</h5>
                            <p className='text-sm '>How to start using PayPal</p>
                        </div>
                    </div>
                    <button onClick={() =>setOpenDropdown(false)} className=' !mx-50 !mb-20 border rounded cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            )}

            { openDropdown === "BUSINESS" && (
                <div className= 'flex items-center absolute top-20 right-90 translate-x-90  w-screen h-80 bg-[#002395] text-white z-1'>
                    <div className='flex justify-center flex-wrap !mx-auto gap-8 w-[90%] h-full'>
                        <div className='!mt-8 w-100 flex'>
                            <section>
                                <h5 className='uppercase font-normal text-sm'>Small-To-Medium-Business</h5>
                                <hr className='w-70'/>
                                <div className=' font-semibold text-base !mt-5 leading-[2.2rem]'>
                                    <p className='hover:underline decoration-solid'>Introduction</p>
                                    <p className='hover:underline decoration-solid'>Getting started</p>
                                </div>
                            </section>
                            <section className=' !mt-10 !-ml-20'>
                                <div className='  font-semibold text-base leading-[2.2rem]'>
                                    <p className='hover:underline decoration-solid'>Solution</p>
                                    <p className='hover:underline decoration-solid'>Accept Payment</p>
                                    <p className='hover:underline decoration-solid'>Make Payments</p>
                                    <p className='hover:underline decoration-solid'>Manage Risk</p>
                                    <p className='hover:underline decoration-solid'>Accelerate Growth</p>
                                    <p className='hover:underline decoration-solid'>Streamline Operations</p>
                                </div>
                            </section>
                        </div>

                        <div className=' !mt-8 w-100 flex'>
                            <section>
                                <h5 className='uppercase font-normal text-sm'>Enterprise</h5>
                                <hr className='w-70'/>
                                <div className=' font-semibold text-base !mt-5 leading-[2.2rem]'>
                                    <p className='hover:underline decoration-solid'>Introduction</p>
                                    <p className='hover:underline decoration-solid'> Marhertplace & Partners</p>
                                </div>
                            </section>
                            <section className=' !mt-10 !-ml-20'>
                                <div className=' font-semibold text-base  leading-[2.2rem]'>
                                    <p className='hover:underline decoration-solid'>Platform & Solutions</p>
                                    <p className='hover:underline decoration-solid'>Accept Payments</p>
                                    <p className='hover:underline decoration-solid'>Make Payments</p>
                                    <p className='hover:underline decoration-solid'>Manage Risk</p>
                                    <p className='hover:underline decoration-solid'>Accelerate Growth</p>
                                    <p className='hover:underline decoration-solid'>Streamline Operations</p>
                                </div>
                            </section>
                        </div>

                        <div className='!mt-8 w-70 '>
                           <h5 className='uppercase font-normal text-sm'>More</h5>
                           <hr className='w-70'/>
                           <div className=' font-semibold text-base !mt-5  leading-[2.2rem]'>
                                <p className='hover:underline decoration-solid'>Pricing</p>
                                <p className='hover:underline decoration-solid'>Business Resource Center</p>
                                <p className='hover:underline decoration-solid'>Identify Verification (KYC)</p>
                           </div>
                        </div>
                    </div>
                    <button onClick={() =>setOpenDropdown(false)} className='!mr-30 !mb-50 border rounded cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                            <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            )}
            
            {openDropdown === "PARTNERS" && (
                <div className= 'flex  items-center absolute top-20 right-90 translate-x-90  w-screen h-40 bg-[#002395] text-white z-1'>
                    <div className='text-start !mx-auto leading-[4rem]'>
                        <h5 className='font-semibold text-md hover:underline decoration-solid '>Partner With Us</h5>
                        <h5 className='font-semibold text-md hover:underline decoration-solid '>Partner Directory</h5>
                    </div>
                    <div className='!mx-auto'>
                        <button onClick={() =>setOpenDropdown(false)} className=' border rounded cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            { openDropdown === "USEFUL INFO" && (
                    <div className= 'flex  items-center absolute top-20 right-90 translate-x-90  w-screen h-40 bg-[#002395] text-white z-1'>
                        <div className=' !mx-auto !mt-1 flex flex-col flex-wrap gap-14 h-full'>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>Online Security</h5>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>Fraud prevention</h5>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>Pishing</h5>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>PBI Complianes</h5>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>Foreign Inward Remittance Advise</h5>
                            <h5 className='font-semibold text-md hover:underline decoration-solid'>Help Center</h5>
                        </div>

                        <div className='!mx-auto'>
                        <button onClick={() =>setOpenDropdown(false)} className=' border rounded cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
                                <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    </div>
            )}
        </nav>
        <Carousel customClass='hidden md:block'/> 
        <LandingCantent customClass='hidden md:block'/>
    </div>
  )
}

export default LandingPage