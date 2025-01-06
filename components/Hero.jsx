import React from 'react';
import { Fugaz_One, League_Spartan } from 'next/font/google';
import Button from './Button'; // Your custom Button component
import Link from 'next/link';

const fugaz = Fugaz_One({
  subsets: ['latin'],
  weight: ['400'],
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
});

function Hero() {
  return (
    <div className="py-4 md:py-12 flex flex-col gap-4 sm:gap-8">
      <h1
        className={`${leagueSpartan.className} font-bold text-5xl md:text-7xl lg:text-6xl text-center py-10`}
      >
        Helps you track your<span className="textGradient"> mood daily</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center font-semibold pb-5">
        Create your mood record and track how you feel each day
      </p>

      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href='/dashboard'>
          <Button text="Sign Up" />
        </Link>
        <Link href='dashboard'>
          <Button text="Log In" dark />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
