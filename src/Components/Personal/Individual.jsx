import React,{useState} from 'react'
import ReactFlagsSelect from "react-flags-select";

const Personal = () => {
    const [selected, setSelected] = useState();
  return (
    <div>
        <div className='flex flex-col justify-center items-center !mt-5 !mb-100 '>
            <nav className=' max-w-2xl w-full !px-4'>
                <div className='flex justify-between items-center  '>
                <div>
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      showSelectedLabel={false}
                      showOptionLabel={false}
                      placeholder = 'country'
                      selectedSize={20}
                      optionsSize={30}
                      className='w-25'
                    />
                 </div>
                    <img className='w-10 ' src="src/assets/paypal.svg" alt="LOGO" />
                    <a className='text-lg font-bold text-[#0181f8] cursor-pointer hover:underline hover:text-[#2c4b5e]'>Log In</a>
                </div>
            </nav>
            <div className='!my-10'>
                <h1 className='text-3xl text-center'>Sign up for PayPal</h1>
                <input className='w-110 h-15 md:w-130 border cursor-pointer rounded border-gray-400 !mt-10 !px-3 font-semibold text-lg' type="text" placeholder='Your email'/>
            </div>
            <button className='!px-50 !py-3 md:!px-35 bg-[#012169] hover:bg-[#0181f8] text-white font-bold rounded-full text-lg'>Next</button>
        </div>
        <footer className='flex justify-center !mb-3'>
            <li className='list-none !px-2'>©2025 PayPal</li>
            <a className='!px-2 font-bold cursor-pointer underline'>Privacy</a>
            <a className='!px-2 font-bold cursor-pointer underline'>Legal</a>
            <a className='!px-2 font-bold cursor-pointer underline'>Contact</a>
            <a className='!px-2 font-bold cursor-pointer underline'>Feedback</a>
        </footer>
    </div>
  )
}

export default Personal