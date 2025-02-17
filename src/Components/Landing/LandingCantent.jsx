import React from 'react'

const LandingCantent = ({customClass}) => {
  return (
    <div className={`${customClass}`}>

        <section className='bg-[#031336] text-white text-center !py-6   md:text-start md:flex '>
            <div className='  md:text-2xl !py-6 md:!mx-auto'>
                <h1 className='font-bold text-xl md:text-2xl'>Looking for PayPal Business Solutions?</h1>
                <p className=' !mx-7 md:!mx-0'>Across regions and around the world, we are here to support you.</p>
            </div>
            <div className='md:!my-auto md:!mx-auto'>
                <button className='bg-[#0181f8] rounded-4xl !py-2 !px-7 font-semibold text-sm '>PayPal for business</button>
            </div>
        </section>

        {/*Image group */}
        <section className=' flex flex-col items-center w-full'>

            <div className='!my-10'>
                <h1 className='text-[#031336] font-bold text-4xl w-110 text-center'>Find more ways to shop with PayPal for you.</h1>
            </div>


            <div className='flex flex-col  md:flex-row md:justify-center md:w-full'>
                
                <section className='!my-5 md:!mx-2 max-w-md md:w-md'>
                    <div className='max-w-xs md:w-auto !mx-auto'>
                         <img className='rounded-3xl object-cover' src="./src/assets/images/menAndWomen.jpg" alt="image" />
                    </div>
                    <div className='text-center flex items-center flex-col'>
                        <h1 className='text-[#031336] font-bold text-2xl !mx-auto !my-2 '>The world is your shopping mall.</h1>
                        <p className='text-lg font-semibold'>From big brands to little boutiques, you can shop safely at over millions of online stores with PayPal.</p>
                        
                    </div>
                    <div className='!mt-22  flex justify-center'>
                        <button className='text-sm font-semibold !py-2 !px-6 bg-[#0181f8] cursor-pointer text-white rounded-full'>
                                Shop Now
                        </button>
                    </div>
                </section>

                <section className='!my-5 md:!mx-2 max-w-md md:w-md '>
                        <div className='max-w-xs md:w-auto !mx-auto '>
                             <img className='rounded-3xl object-cover' src="./src/assets/images/youngMan.jpg" alt="" /> 
                        </div> 
                        <div className='text-center'>
                            <h1 className='text-[#031336] font-bold text-2xl !mx-auto !my-2 '>Pay with your preferred card.</h1>
                            <p className='text-lg font-semibold  '>Link all your cards and choose which one to use at checkout. Shopping online has never been this easy. You can also keep earning rewards from your favourite cards.¹</p>
                            
                        </div>
                        <div className='!mt-8 flex justify-center'>
                            <button className=' text-sm font-semibold bg-[#0181f8] text-white cursor-pointer !py-2 !px-6 rounded-full'>
                                Link a Card Now
                            </button>
                        </div>
                </section>

                <section className='!my-5 md:!mx-2 max-w-md md:w-md  '>
                        <div className='max-w-xs md:w-auto  !mx-auto '>
                             <img className='rounded-3xl object-cover' src="./src/assets/images/OldMan.jpg" alt="" />
                        </div> 
                        <div className='text-center'>
                            <h1 className='text-[#031336] font-bold text-2xl !mx-auto !my-2 '>Shop online with confidence.</h1>
                            <p className='text-lg font-semibold '>Shop online with confidence – with 24/7 fraud monitoring and Buyer Protection² on eligible purchases. Terms and limitations apply.</p>
                        </div>
                        <div className='!mt-15 flex justify-center flex-col items-center'>
                            <button className='inline-block text-sm font-semibold bg-[#0181f8] text-white  cursor-pointer !py-2 !px-6  rounded-full'>
                                Find Out More
                            </button>
                        </div>
                </section>

            </div>
        </section>

        <div className='flex flex-wrap justify-center bg-[#031336] text-white !pt-20'>
            <div className='flex flex-col max-w-2xl !mx-auto text-center md:text-start'>
                <div className=' w-md  '>
                    <h1 className='text-5xl font-bold !mb-8'>Make and receive payments with ease.</h1>
                    <h3 className='text-2xl font-bold !mb-3'>Popular payments, happy customers.</h3>
                    <p className='text-lg font-semibold !mb-4'>Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.</p>
                    <button className='text-sm font-semibold  !py-3 !px-6 bg-[#0181f8] cursor-pointer text-white rounded-full'>Optimise Checkout</button>
                </div>

                <div className='w-md !mb-5'>
                    <h3 className='text-2xl font-bold !mt-8 !mb-3'>Invoice and paid fast.</h3>
                    <p className='text-lg font-semibold !mb-4'>Send unlimited incoice that customers can pay even if they don't have a PayPal account - with Seller Protection from fraud and unauthorised transaction.</p>
                    <button className='text-sm font-semibold  !py-3 !px-6 bg-[#0181f8] cursor-pointer text-white rounded-full'>Send an Invoice</button>
                </div>
            </div>
            <div className='max-w-80 !pt-2 w-[100%]  height-auto md:max-w-150 md:w-full'>
                <img className='object-cover' src="./src/assets/images/mobile.png" alt="" />
            </div>
        </div>

        <div className='bg-[#f1f1f1] '>

            <div className='flex flex-col justify-center items-center'>

                <h1 className=' font-bold text-4xl md:text-5xl !py-13'>PayPal by the numbers.</h1>

                <div className='flex flex-col  md:grid md:grid-cols-2 !my-10 !px-5'>

                    <div className='flex flex-col  justify-center items-center md:flex-row  md:!mx-auto !my-5 ' >
                        <img className='w-15 h-15 md:w-17 md:h-17' src='./src/assets/icon/group-users.png' />
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold md:!mr-20'>427M active accounts.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-15 h-15 md:w-16 md:h-16' src='./src/assets/icon/credit-card.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold '>$403.9B total payment volume.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-15 h-15 md:w-16 md:h-16' src='./src/assets/icon/transaction.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold '>6.5B Total payment transactions.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-18 h-17 md:w-22 md:h-20' src='./src/assets/icon/confidence.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold'>74% increase in buyer confidence.</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='!py-10'>
            <h1 className='text-center font-bold text-4xl'>Shop from brands you love.</h1>
            <div className='grid grid-cols-1 md:grid md:grid-cols-5 md:gap-15 md:!mx-4  !mt-10 justify-self-center items-center'>
                <img className=' w-35' src='./src/assets/icon/spotify.png' />
                <img className=' w-35' src='./src/assets/icon/asos.png'/>
                <img className=' w-35' src='./src/assets/icon/grab.png'/>
                <img className=' w-35' src='./src/assets/icon/foodpanda.png'/>
                <img className=' w-35' src='./src/assets/icon/Q0010.png'/>
            </div>
        </div>

       <div className=' bg-[#277cfc] text-center'>
            <div className='text-center !mx-auto !py-5'>
                <p className='text-center font-bold md:text-4xl text-3xl  text-white md:!px-30 '>Join the global community of PayPal users who are sending, spending, and receiving money securely every day.</p>
                <button className=' cursor-pointer font-bold text-[17px] bg-[#ffffff] rounded-full !px-10 !py-2 !mt-10'>Sign Up Now</button>
            </div>
        </div>

        <div className='  w-full flex justify-center'>
            <div className=' md:max-w-7xl md:w-full !mx-3 w-lg'>
                <div className=' text-[#696969]  text-[14px] md:text-sm !pt-20 '>
                    <p>Terms & Conditions:</p>
                    <p>* Buyer Protection is available on eligible purchases only. See the Buyer Protection section of the User Agreement for more information.</p>
                    <p>** Subject to issuer’s reward programme terms and conditions.</p>
                    <p className='!pt-10'>1 Reward scheme terms may differ when using PayPal. Please refer to your card issuer.</p>
                    <p>2 For eligible purchases within 180 days of payment. Terms and conditions apply.</p>
                    <p>3 Available on eligible purchases. Limitations apply.</p>
                    <p>4 PayPal Earnings-Q1, 2024, based on PayPal internal data. Active accounts are accounts that have completed a transaction within the past 12 months.</p>
                    <p>5 PayPal Earnings-Q1, 2024, based on PayPal internal data.</p>
                    <p>6 PayPal Earnings-Q1, 2024, based on PayPal internal data.</p>
                    <p>7 Nielsen, commissioned by PayPal, Nielsen Media Attitudinal Survey of USA (Feb 2023) with 3,999 recent purchasers (past 2 weeks) from large enterprise merchants, including 1,999 PayPal transactions & 2,000 non-PayPal transactions. Base N. PayPal users = 3,350.</p>
                    <p className='!pt-10'>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
                    <p  className='!pt-10'>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
                </div>
                <div>
                    <div className='!pt-10'>
                        <ul className='flex gap-1 font-bold text-[#302f2f] text-[13px] md:text-[14px]'>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Help</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Contact</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Fees</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Security</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Shop</li>
                        </ul>
                        <hr className='!my-2'/>
                        <ul className='flex gap-1 font-bold text-[#696969] text-[13px] md:text-[14px]'>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>About</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Newsroom</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Jobs</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Devlopers</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Partners</li>
                        </ul>

                        <ul className='flex md:gap-1 font-bold text-[#696969] !mt-2 text-[13px] md:text-[14px]'>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>1999 - 2025</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Accessibility</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Cookies</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Privacy</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>CSR</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Annual Returns</li>
                            <li className='hover:underline decoration-solid md:!px-2 !px-1'>Legal</li>
                        </ul>
                        <p className='font-semibold !pt-3 text-[#696969] text-[13px] md:text-[14px]'>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the <a href='#' className='text-[#277cfc]'>terms and conditions</a> carefully.</p>
                        <p className='font-semibold !pt-4 !pb-9 text-[#696969] text-[13px] md:text-[14px]'>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more <a href='#' className='text-[#277cfc]'>here</a>.</p>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  )
}

export default LandingCantent


