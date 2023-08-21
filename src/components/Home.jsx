import React from 'react';
import ProductsHomeCard from './ProductsHomeCard.jsx';
import Footer from './Footer.jsx';
import FollowUs from './FollowUs.jsx';
import Newsletter from './Newsletter.jsx';

const Home = () => {
  return (
    <div>
      <img src="https://i.ibb.co/z8Y1TZs/026048e2-d67a-45c2-bbc3-92caa705803c.jpg"
       alt="fondo" className="max-w-full  w-full h-auto max-h-[600px] p-[1.75rem] object-contain" />
      <div className="flex align-center justify-center">
        <h1 className="text-2xl sm:text-4xl font-semibold leading-9 dark:text-white ">Nuestros Productos</h1>
      </div>
        <div className='m-5'>
          <ProductsHomeCard />
        </div>
      <FollowUs/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
