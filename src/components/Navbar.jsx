import React, { useState } from 'react';
import LogoImg from '../assets/img/LogoSVG.jsx';
import DarkImg from '../assets/icons/DarkSVG.jsx';
import CartWidget from './CartWidget.jsx';

const Navbar = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const Menus = [
    { title: 'INICIO' },
    { title: 'PRODUCTOS' },
    { title: 'NOSOTROS' },
  ];

  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (

    <nav className='fixed bottom-0 w-full sm:relative sm:flex sm:flex-col'>
  <div className='flex justify-between items-center  py-3 px-11'>
    <LogoImg color='#fff' width={120} className='mt-3' />
    <ul className='hidden sm:flex list-none'>
      {Menus.map((menu, index) => (
        <li key={index} className='flex shrink'>
          <a className='text-lg text-black dark:text-white font-bold p-1 m-4 relative' href={`${menu.title}`}>
            {menu.title}
          </a>
        </li>
      ))}
    </ul>

    <div className='flex gap-5 relative'>
      <button onClick={handleClick}>
      <DarkImg width={31} />
      </button>
      <button onClick={() => setProductsAmount(productsAmount + 1)}>
      <CartWidget productsAmount={productsAmount} />
      </button>
    </div>
</div>

  <div className='fixed bottom-[75px]  mt-2 w-full sm:relative sm:bottom-0 sm:flex sm:justify-center'>
    <hr className='w-full h-[1px] sm:w-[93%] sm:h-[3px] bg-[#bdcf23] border-0' />
  </div>
  </nav>

  );
};

export default Navbar;
