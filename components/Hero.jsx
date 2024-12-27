import React from 'react';
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

function Hero() {
  return (
    <div className="py-4 md:py-12 flex flex-col gap-4 sm:gap-8">
      <h1
        className={`${fugaz.className} font-bold text-5xl md:text-7xl sm:text-6xl text-center py-10`}
      >
        <span className="textGradient">Zen</span> helps you track your mood{" "}
        <span className="textGradient">daily</span> and improve it if needed
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center font-semibold'>Create your mood record and track how you feel each day</p>
    </div>
  );
}

export default Hero;
