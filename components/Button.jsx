import { League_Spartan } from 'next/font/google';
import React from 'react';

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
});

function Button({ text, dark }) {
  return (
    <button
      className={`border-2 border-solid overflow-hidden duration-300 rounded-full 
        ${dark ? 
          'text-white bg-green-800 hover:bg-green-700 hover:text-green-100 hover:border-green-700' : 
          'text-green-700 bg-[#f4ffef] border-green-700 hover:bg-[#ebfde3] hover:border-green-600 hover:text-green-700'}`}
    >
      <p className={`${leagueSpartan.className} px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3`}>
        {text}
      </p>
    </button>
  );
}

export default Button;
