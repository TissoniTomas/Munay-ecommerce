import React, { useState } from 'react';
import LogoImg from '../assets/img/LogoSVG.jsx';
import SearchImg from '../assets/icons/SearchSVG.jsx';
import CartWidget from './CartWidget.jsx';

const Navbar = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const Menus = [
    { title: 'INICIO' },
    { title: 'PRODUCTOS' },
    { title: 'NOSOTROS' },
  ];

  return (

    <div className='mt-3'>
  <nav className='flex justify-between items-center py-3 px-11'>
    <LogoImg color='#fff' width={120} className='mt-3' />
    <ul className='flex list-none'>
      {Menus.map((menu, index) => (
        <li key={index} className={`flex shrink ${menu.active ? 'active' : ''}`}>
          <a className='text-lg text-white font-bold p-1 m-4 relative' href={`${menu.title}`}>
            {menu.title}
          </a>
        </li>
      ))}
    </ul>

    <div className='flex gap-5 relative'>
      <button>
      <SearchImg color='#fff' width={25} />
      </button>
      <button onClick={() => setProductsAmount(productsAmount + 1)}>
      <CartWidget productsAmount={productsAmount} />
      </button>
    </div>
  </nav>

  <div className='flex justify-center mt-2'>
    <hr className='w-[93%] h-[3px] bg-[#bdcf23] border-0' />
  </div>
</div>

  );
};

export default Navbar;
