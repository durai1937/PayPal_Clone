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

                <div className='flex flex-col  md:flex-row md:flex-wrap md:w-[60%] !my-10'>

                    <div className='flex flex-col  justify-center items-center md:flex-row  md:!mx-auto !my-5' >
                        <img className='w-15 h-15 md:w-22 md:h-22' src='./src/assets/icon/group-users.png' />
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold '>427M active accounts.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-15 h-15md:w-24 md:h-20' src='./src/assets/icon/credit-card.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold '>$403.9B total payment volume.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-15 h-15 md:w-20 md:h-20' src='./src/assets/icon/transaction.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold '>6.5B Total payment transactions.</h3>
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row  md:!mx-auto !my-5'>
                        <img className='w-15 h-15 md:w-22 md:h-22' src='./src/assets/icon/confidence.png'/>
                        <h3 className='text-[1.5rem] !pl-3 !my-auto font-bold'>74% increase in buyer confidence.</h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingCantent


