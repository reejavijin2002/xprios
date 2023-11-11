import React, { useState } from 'react';

import SearchModal from '../components/ModalSearch';
import Notifications from '../components/DropdownNotifications';
import Help from '../components/DropdownHelp';
import UserMenu from '../components/DropdownProfile';
import ThemeToggle from '../components/ThemeToggle';
import logo from "../images/WhatsApp Image 2023-11-03 at 1.15.53 PM.jpeg"
import { Link } from 'react-router-dom';
import Headlinks from '../components/Headlinks';

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className=" sticky top-0 bg-stone-100 dark:bg-[#030508] border-b border-slate-200 dark:border-slate-700 z-30 ">
      <div className="px-4 ">

        <div className="flex items-center justify-between h-16 ">
          <Link to="/" >
            <div className='flex caret-transparent'>

              <div>


                <img src={logo} alt='' width="30px" height="30px" />

              </div> <div className='font-bold '><h3>XPRIOS</h3></div></div>
          </Link>


          <Headlinks/>




          <div className="flex items-center space-x-3">
            <div>
             
             
              
            </div>
            <div className=' xs:hidden sm:hidden md:flex text-sm'>

           <Link to='/Login'> <button className='px-5 py-2 bg-fuchsia-700 border-3 border-fuchsia-700 text-white font-bold rounded-md '>Login</button></Link>
            </div>
      
          
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
