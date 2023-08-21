import React from 'react';
import InstaCard from './InstaCard.jsx';

const FollowUs = () => {
  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className=" text-center">
        <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 dark:text-white md:w-full w-9/12 mx-auto">Síguenos en Instagram</h2>
        <p className=" font-normal text-base leading-6 text-gray-600 dark:text-gray-300 mt-4 lg:w-5/12 md:w-9/12 mx-auto">
          ¡Síguenos en Instagram @<span className="underline cursor-pointer">munaytucuman</span> y etiquétanos con tu producto!
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
        <InstaCard img={'https://i.ibb.co/r6kjqxB/pol.png'} />
        <InstaCard img={'https://i.ibb.co/cxW5CFv/taz.png'} />
        <InstaCard img={'https://i.ibb.co/VVPtR1m/stick.png'} />
        <InstaCard img={'https://i.ibb.co/JjMvNXN/ccc.png'} />
      </div>
    </div>
  );
};

export default FollowUs;
