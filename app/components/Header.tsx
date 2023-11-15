import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <Link
        href='https://github.com/AidanLDev/energise-technical-exercise'
        target='_blank'
      >
        <Image
          alt='GitHub logo'
          src='/images/github-512.webp'
          width={150}
          height={50}
          priority
          className='fixed opacity-50 m-10 cursor-pointer'
        />
      </Link>
      <div className='flex justify-center'>
        <Image
          alt="Logo Text Here's Logo"
          src='/images/logo-text-here.png'
          width={300}
          height={240}
          className='rounded-2xl m-5'
          priority
        />
      </div>
    </header>
  );
};
