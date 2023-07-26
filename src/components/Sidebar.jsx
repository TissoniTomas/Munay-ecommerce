import React from 'react';
import { NavLink } from 'react-router-dom';
import Menus from '../constants/Menus.jsx';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`absolute mt-[11%] w-[100%] z-1 transform transition-transform duration-300 ease-in-out bg-white dark:bg-black ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <ul className=' list-none'>
        {Menus.map((menu, index) => <li key={index} className='w-full p-3 '>
          <NavLink to={`/categoria/${menu.title.toLocaleLowerCase()}`}className='flex w-full p-3 font-light tracking-wider text-[17px] dark:text-white active:underline dark:active:bg-gray-500'>
            {menu.title}
          </NavLink> </li>)}
        <hr className='h-[2px] bg-gray-200' />
      </ul>
    </div>
  );
};

export default Sidebar;
