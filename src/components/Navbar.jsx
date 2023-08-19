import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Logo, DarkSVG, MenuSVG, SunSVG, CloseSVG, ExpandSVG,
} from '../assets/icons';
import Menus from '../constants/Menus.jsx';

import CartWidget from './CartWidget.jsx';
import Sidebar from './Sidebar.jsx';
import Categories from './Categories.jsx';

const Navbar = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showMenuIndex, setShowMenuIndex] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleMenuToggle = (index) => {
    setShowMenuIndex(index);
  };

  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const linkClass = 'flex flex-col items-center text-black dark:text-white font-normal p-1 mr-4 mt-3 sm:text-sm md:text-md lg:text-lg xl:text-xl xl:gap-4 hover:text-green dark:hover:text-green';
  return (

    <nav className='w-full flex flex-col'>
      <div className='flex justify-between items-center px-4 sm:px-0 py-1 md:py-3 lg:py-5'>
        <button onClick={toggleSidebar} className='sm:hidden'>
          {isSideBarOpen ? <CloseSVG width={30} />
            : <MenuSVG className='w-[30px] h-[30px] mt-1 sm:hidden' />
          }
        </button>

        <Link to={'/'}><Logo className='mt-2 w-[75px] sm:w-[120px] lg:w-[150px]' /></Link>

        <ul className='hidden sm:flex list-none'>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className='flex shrink flex-col'
              onMouseEnter={() => handleMenuToggle(index)}
              onMouseLeave={() => handleMenuToggle(null)}
              onClick={() => handleMenuToggle(index)}
            >
              <NavLink
                to={`/categoria/${menu.title.toLowerCase()}`}
                className={(navData) => (navData.isActive ? `${linkClass} text-green dark:text-green` : `${linkClass}`)}

              >
                <div className='relative items-center'>
                  <div className='flex items-center'>
                  {menu.title}
                  {index === 1 && <ExpandSVG />}
                  </div>
                  {showMenuIndex === index && index === 1 && (
                    <Categories closeSideBar={closeSidebar} />
                  )}
                </div>

              </NavLink>
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
        <hr className='w-full h-[1px] sm:h-[2px] bg-green border-0' />
      </div>
      <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
    </nav>
  );
};

export default Navbar;
