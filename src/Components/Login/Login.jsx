import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ReactFlagsSelect from "react-flags-select";


const Login = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState();
  return (
    <div >
        <div className='flex justify-center '>
            <div className='md:border md:border-[#dadada] md:!my-25 rounded-2xl !px-5 md:max-w-md w-full'>
                <div className='flex justify-center !mb-20 !mt-7'>
                    <img className='w-8' src="./src/assets/paypal.svg" alt="" />
                </div>
                <div className='flex flex-col !mx-4'>
                    <input className='border border-[#c4c2c2] rounded h-15 w-full !px-4 !my-2 hover:text-[#0181f8]' type='text' placeholder='Email or mobile number'/>
                    <input className='border border-[#c4c2c2] rounded h-15 w-full !px-4 !my-2 hover:text-[#0181f8]' type='text' placeholder='Password'/>
                    <a className='font-bold text-lg text-[#0181f8] cursor-pointer hover:text-[#74bcff]'>Forgotten password?</a>
                    <button onClick={() => navigate('/AccSecNav')} className='w-full h-12 !my-3 bg-[#0181f8] text-white rounded-full font-bold cursor-pointer'>Log In</button>
                    <div className='flex justify-center'>
                        <hr className='w-full !mt-4 text-gray-400' /><a className='!mx-3'>or</a><hr className='w-full !mt-4 text-gray-400' />
                    </div>
                    <button onClick={() => navigate('/AccountSelection')} className='w-full h-12 !my-3 hover:text-[#0181f8] rounded-full border font-bold cursor-pointer'>Sign Up</button>
                </div>
                <div>
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      showSelectedLabel={false}
                      showOptionLabel={false}
                      placeholder = 'country'
                      selectedSize={20}
                      optionsSize={30}
                      className='w-25 !mx-auto !my-5'
                    />
                 </div>
            </div>
            
        </div>
        <footer className='bg-gray-100 font-bold flex justify-center !py-3 text-xs '>
            <a className='!mx-1' href='#'>Contact Us</a>
            <a className='!mx-1' href='#'>Privacy</a>
            <a className='!mx-1' href='#'>Legal</a>
            <a className='!mx-1' href='#'>Worldwide</a>
        </footer>
        
    </div>
  )
}

export default Login

