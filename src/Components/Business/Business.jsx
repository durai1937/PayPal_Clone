import React from 'react'

const Business = () => {
  return (
    <div className='bg-gray-100'>
      <nav className='!py-5 !px-10 bg-white'>
        <img className='w-35' src="src/assets/paypallong.svg" alt="" />
      </nav>
        <div className='flex justify-center !mt-15 !mb-30'>
          <div className='bg-white max-w-md w-full flex flex-col justify-center items-center !py-16'>
              <img className='w-10 !mx-auto' src="./src/assets/paypal.svg" alt="" />
              <div className='!mx-8 !mb-15 !my-5'>
                <h1 className='text-xl font-light text-gray-400'>Sign up for a Business account</h1>
                <p className='text-xl font-light text-gray-400 !mt-10'>Enter the email address you’ll use to sign up or log in</p>
                <input className='border border-gray-400 rounded-lg !px-2 !py-4 w-90 !mx-2 !mt-4' type='text' placeholder='Email address'/>
                <button className='bg-[#001c64] hover:bg-[#0181f8] rounded-full text-white  font-semibold !px-39 !mx-2 !py-3 !mt-6'>Submit</button>
              </div>
          </div>
        </div>
        <footer className='bg-white text-center !mb-2 !py-2'>
            <a className='!px-2 text-gray-500'>Copyright © 1999 - 2025 PayPal.</a>
            <a className='!px-2 font-semibold underline cursor-pointer'>Privacy</a>
            <a className='!px-2 font-semibold underline cursor-pointer'>Statement</a>
            <a className='!px-2 font-semibold underline cursor-pointer'>Legal</a>
            <a className='!px-2 font-semibold underline cursor-pointer'>Help</a>
            <a className='!px-2 font-semibold underline cursor-pointer'>Contact</a>
        </footer>
    </div>
  )
}

export default Business