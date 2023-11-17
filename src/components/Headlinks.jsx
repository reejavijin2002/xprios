import React from 'react'
import { Link } from 'react-router-dom'

const Headlinks = () => {
  return (
    <div className=' xs:hidden sm:hidden md:flex text-sm'>
        <Link to='/' className='px-6 font-[poppins] font-semibold hover:text-fuchsia-500'>Home</Link>

        <Link to='/About' className='px-6 font-[poppins] font-semibold  hover:text-fuchsia-500'>About</Link>
        <Link to='/Template' className='px-6 font-[poppins] font-semibold  hover:text-fuchsia-500'>Templates</Link>
        <Link to='/Features' className='px-6 font-[poppins] font-semibold  hover:text-fuchsia-500'>Features</Link>
        <Link to='/contact' className='px-10  font-[poppins] font-semibold  hover:text-fuchsia-500'>Contact</Link>


        

    </div>
  )
}

export default Headlinks