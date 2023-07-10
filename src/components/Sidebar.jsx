import React from 'react';
import Menus from '../constants/Menus.jsx';
import { CloseSVG } from '../assets/icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`absolute h-full w-[100%] bg-gray-50 dark:bg-gray-950 ${isOpen ? '' : 'hidden'}`}>
      <div className=' flex flex-row-reverse'>
        <button className='p-3' onClick={toggleSidebar}>
          <CloseSVG width={30} />
        </button>
      </div>
      <ul className=' list-none'>
        {Menus.map((menu, index) => <li key={index} className='w-full p-3 border-t-2 bor'>
          <a className='flex w-full p-3 font-light tracking-wider text-[17px] dark:text-white active:underline dark:active:bg-gray-500' href={`#${menu.title}`}>
            {menu.title}
          </a>
        </li>)}
        <hr className='h-[2px] bg-gray-200' />
      </ul>
    </div>
  );
};

export default Sidebar;
