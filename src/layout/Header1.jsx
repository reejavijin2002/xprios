

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg"
import { MdViewHeadline } from "react-icons/md";


const Header = () => {
  return (
    <>
    <div className=''>
    <header className="sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30 p-3 flex justify-between items-center">
      <div className='flex'>
      <div><img src={logo}  alt='' height="25px" width='25px'/></div>
      
      <div className="text-md font-bold text-black">XPRIOS</div>
      </div>

    
     

      
      <div className="flex space-x-4">
       
        <Link className="text-white font-bold xs:invisible md:visible bg-fuchsia-700 p-3 rounded-md" to = "/Login" >
        Logout
        </Link>
      </div>
      <div className='xs:visible md:hidden'>
      <Link to='/Dashboardicon'>
      <div className='xs:visible md:hidden'>
        
    <MdViewHeadline className='w-[25px] h-[25px] xs:visible md:invisible' />
    
    </div>
    </Link>
    </div>
    </header>
    </div>
    
    </>
  );
};

export default Header;
