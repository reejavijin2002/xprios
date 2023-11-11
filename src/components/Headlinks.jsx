import React from 'react'
import { Link } from 'react-router-dom'

const Headlinks = () => {
  return (
    <div className=' xs:hidden sm:hidden md:flex text-sm'>
        <Link to='/About' className='px-6 font-semibold'>About</Link>
        <Link to='/Template' className='px-6 font-semibold'>Templates</Link>
        <Link to='/Features' className='px-6 font-semibold'>Features</Link>
        <Link to='/contact' className='px-10 font-semibold'>Contact</Link>


        

    </div>
  )
}

export default Headlinks