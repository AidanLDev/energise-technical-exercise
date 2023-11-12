import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className='flex justify-center'>
      <Image
        alt="Logo Text Here's Logo"
        src='/images/logo-text-here.png'
        width={300}
        height={240}
        className='rounded-2xl m-5'
        priority
      />
    </header>
  );
};
