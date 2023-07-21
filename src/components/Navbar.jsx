import React, { useState } from 'react';
import {
  Logo, DarkSVG, MenuSVG, SunSVG, CloseSVG,
} from '../assets/icons';
import Menus from '../constants/Menus.jsx';

import CartWidget from './CartWidget.jsx';
import Sidebar from './Sidebar.jsx';

const Navbar = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (

    <nav className='w-full flex flex-col'>
      <div className='flex justify-between items-center py-1 px-4 md:px-11 md:py-3 lg:px-15 lg:py-5'>
        <button onClick={toggleSidebar} className='sm:hidden'>
          { isSideBarOpen ? <CloseSVG width={30} />
            : <MenuSVG className='w-[30px] h-[30px] mt-1 sm:hidden' />
          }
        </button>
        <Logo className='mt-2 w-[75px] sm:w-[120px] lg:w-[150px]' />

        <ul className='hidden sm:flex list-none'>
          {Menus.map((menu, index) => (
            <li key={index} className='flex shrink flex-col'>
              <a
                className='flex flex-col items-center uppercase dark:text-white font-medium p-1 mr-4 mt-3
                sm:text-sm md:text-lg lg:text-xl xl:text-2xl xl:gap-4
                hover:text-green dark:hover:text-green'
                href={`#${menu.title}`}>
                {menu.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-3.5 relative mt-1'>
          <button onClick={toggleDarkMode}>
            <DarkSVG className='dark:hidden w-[25px] md:w-[31px]' />
            <SunSVG className='hidden dark:block w-[25px] md:w-[31px]' />
          </button>
          <button onClick={() => setProductsAmount(productsAmount + 1)}>
            <CartWidget productsAmount={productsAmount} />
          </button>
        </div>
      </div>

      <div className='w-full flex justify-center mt-1 md:mt-3 lg:mt-1'>
        <hr className='w-full h-[1px] sm:w-[93%] sm:h-[2px] lg:w-[97%] bg-green border-0' />
      </div>
      <Sidebar isOpen={isSideBarOpen} />
    </nav>
  );
};

export default Navbar;
