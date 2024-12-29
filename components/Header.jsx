import { League_Spartan } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
});

function Header() {
  return (
    <header className="flex items-center justify-between p-5">
      <Link href='/' className={`${leagueSpartan.className} text-5xl md:text-5xl lg:text-5xl textGradient`}>
        Zen
      </Link>
      <nav className='textGradient text-md'>
        <ul className="flex space-x-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/journal">Journal</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
