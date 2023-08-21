import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menus from '../constants/Menus.jsx';
import { ExpandSVG } from '../assets/icons';
import Categories from './Categories.jsx';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showMenuIndex, setShowMenuIndex] = useState(false);
  const handleMenuToggle = (index) => {
    if (index === 1) {
      setShowMenuIndex((prevState) => (prevState === 1 ? null : 1));
    } else {
      setIsOpen(false);
      setShowMenuIndex(null);
    }
  };

  return (
    <div className={`z-10  absolute  mt-[11%] w-[100%] transform transition-transform duration-300 ease-in-out bg-white dark:bg-black ${isOpen ? 'translate-x-0 ' : '-translate-x-[150%]'}`}>
      <ul className='list-none'>
        {Menus.map((menu, index) => (
          <li key={index} className='w-full p-3 flex flex-col' onClick={() => handleMenuToggle(index)}>
            <NavLink to={menu.title === 'Inicio' ? '/' : `/categoria/${menu.title.toLocaleLowerCase()}`} className='flex w-full p-3 font-light tracking-wider text-[17px] dark:text-white active:underline dark:active:bg-gray-500'>
              {menu.title}
              {index === 1 && <ExpandSVG />}
            </NavLink>
            {showMenuIndex === index && index === 1 && <Categories />}
          </li>
        ))}
        <hr className='h-[2px] bg-gray-200' />
      </ul>
    </div>
  );
};

export default Sidebar;
