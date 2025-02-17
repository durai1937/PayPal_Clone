import React from 'react'
import {useState,useEffect,useRef,createRef} from 'react'
import {useNavigate} from 'react-router-dom'

const AccountSelection = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
        <div >
            <div className=' z-100 flex justify-between items-center !py-7 !mx-2'>
                <div className='w-30 !mx-auto'><img src='src/assets/paypallong.svg' alt='Logo'/></div>
                <button onClick={() => navigate('/Login')} className='!mx-auto !px-4 !py-2 font-semibold  rounded-3xl cursor-pointer outline-2 outline-blue-500/100'>Log In</button>
            </div>
        </div>

        <div className=''>
            <div className='bg-[url(./src/assets/images/Couple.jpg)] bg-fixed w-full h-200 bg-cover flex justify-center items-center'>
                <div className='bg-white flex flex-col justify-center items-center rounded-4xl !mx-4 md:!ml-120 md:!mr-50 !py-10 md:w-lg'>
                    <div className='flex flex-col text-center !mb-10'>
                        <h1 className='text-4xl font-light'>Join PayPal today for free.</h1>
                        <h4 className='text-lg text-[#696969] pt-3'>Get started by choosing your account type below</h4>
                    </div>
                    <div className='relative leading-9 !mb-10 !ml-3'>
                        <div className='flex items-center'>
                            <input onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === "Individual"} value='Individual' type='radio' className='w-7 h-7 cursor-pointer accent-red-500 border ' />
                            <div className='!mx-3'>
                                <h2 className='text-red-500 font-bold text-3xl '>Individual Account</h2>
                                <h3 className='text-red-500 text-lg'>Send payments only</h3>
                            </div>
                        </div>
                        <ul className='list-disc !mx-18'>
                            <li>Pay for your shopping worldwide</li>
                            <li>Get covered 24/7 from online and card fraud</li>
                        </ul>
                    </div>

                    <div className='relative leading-9 !ml-3'>
                        <div className='flex items-center'>
                            <input onChange={(e) => setSelectedOption(e.target.value)} checked={selectedOption === "Business"} value='Business' type='radio' className='w-7 h-7 cursor-pointer accent-[#001c64] ' />
                            <div className='!mx-3'>
                                <h2 className='text-[#001c64] font-bold text-3xl '>Business Account</h2>
                                <h3 className='text-[#001c64] text-lg '>Receive and send payments</h3>
                            </div>
                        </div>
                        <ul className='list-disc  w-75 !mx-18'>
                            <li>Suitable for individuals who want to receive payments, sellers, freelancers and businesses</li>
                            <li>Receive and send payments overseas</li>
                            <li>No set-up/maintenance fees</li>
                        </ul>
                    </div>
                    <button onClick={() => selectedOption && navigate(`/${selectedOption}`)} className=' cursor-pointer !px-8 !py-3 !mt-5 font-semibold  rounded-3xl bg-[#001c64] text-white'>Next</button>
                </div>
            </div>
            
            <div>
                <div className='felx w-full r text-sm bg-white'>
                    <div className=' '>
                        <ul className='md:!ml-32 md:text-sm  text-xs !mx-4 !mt-10 !mb-2 flex gap-8 font-bold text-[#302f2f]'>
                            <li className='hover:underline decoration-solid'>Help</li>
                            <li className='hover:underline decoration-solid'>Contact</li>
                            <li className='hover:underline decoration-solid'>Fees</li>
                            <li className='hover:underline decoration-solid'>Security</li>
                            <li className='hover:underline decoration-solid'>Shop</li>
                        </ul>
                        <hr className='md:w-full md:max-w-7xl flex !mx-auto w-full '/>
                        <div className='md:flex gap-1 flex flex-wrap justify-start items-start !my-4 !mx-4 md:!mx-0'>
                            <ul className='flex md:gap-8 gap-3 md:text-sm  text-xs font-bold text-[#696969] md:!mx-auto'>
                                <li className='hover:underline decoration-solid'>About</li>
                                <li className='hover:underline decoration-solid'>Newsroom</li>
                                <li className='hover:underline decoration-solid'>Jobs</li>
                                <li className='hover:underline decoration-solid'>Devlopers</li>
                                <li className='hover:underline decoration-solid'>Partners</li>
                            </ul>
                            <ul className='flex md:gap-8 md:text-sm gap-3 text-xs font-bold text-[#696969] md:!mx-auto'>
                                <li className=''>1999 - 2025</li>
                                <li className='hover:underline decoration-solid'>Accessibility</li>
                                <li className='hover:underline decoration-solid'>Cookies</li>
                                <li className='hover:underline decoration-solid'>Privacy</li>
                                <li className='hover:underline decoration-solid'>CSR</li>
                                <li className='hover:underline decoration-solid'>Annual Returns</li>
                                <li className='hover:underline decoration-solid'>Legal</li>
                            </ul>
                        </div>
                        <div className='md:w-full md:max-w-7xl !px-4 md:!px-0  w-full !mx-auto !mb-4 '>
                            <p className=' font-semibold  text-[#696969] md:text-sm  text-xs !py-2'>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the <a href='#' className='text-[#277cfc]'>terms and conditions</a> carefully.</p>
                            <p className='font-semibold text-[#696969] md:text-sm  text-xs !py-2'>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more <a href='#' className='text-[#277cfc]'>here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default AccountSelection