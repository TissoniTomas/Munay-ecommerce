import React, { useState } from 'react';
import { Logo, DarkSVG, MenuSVG } from '../assets/icons';

import CartWidget from './CartWidget.jsx';

const Navbar = () => {
  const [productsAmount, setProductsAmount] = useState(0);

  const Menus = [
    { title: 'INICIO' },
    { title: 'PRODUCTOS' },
    { title: 'NOSOTROS' },
    { title: 'CONTACTO' },
  ];

  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (

    <nav className='w-full flex flex-col'>
  <div className='flex justify-between items-center py-1 px-4 md:px-11 md:py-3 lg:px-15 lg:py-5'>
    <MenuSVG className='w-[30px] h-[30px] mt-1 sm:hidden'/>
    <Logo className='mt-2 w-[75px] sm:w-[120px] lg:w-[150px]' />
    <ul className='hidden sm:flex list-none'>
      {Menus.map((menu, index) => (
        <li key={index} className='flex shrink'>
          <a className=' text-black dark:text-white font-medium p-1 mr-4 mt-3  sm:text-sm md:text-lg lg:text-xl' href={`${menu.title}`}>
            {menu.title}
          </a>
        </li>
      ))}
    </ul>

    <div className='flex gap-3.5 relative mt-1'>
      <button onClick={handleClick}>
      <DarkSVG className='w-[25px] md:w-[31px]' />
      </button>
      <button onClick={() => setProductsAmount(productsAmount + 1)}>
      <CartWidget productsAmount={productsAmount} />
      </button>
    </div>
</div>

  <div className='w-full flex justify-center mt-1 md:mt-3 lg:mt-1'>
    <hr className='w-full h-[1px] sm:w-[93%] sm:h-[3px] lg:w-[97%] bg-[#bdcf23] border-0' />
  </div>
  </nav>

  );
};

export default Navbar;
