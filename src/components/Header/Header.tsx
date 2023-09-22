'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/shared/logo.svg'
import HamburgerMenu from '@/public/assets/shared/icon-hamburger.svg'
import closeMenu from '@/public/assets/shared/icon-close.svg'
import { scrollToElement, scrollToTop } from '@/utils/scroll'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const links = ['home', 'destination', 'crew', 'technology'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = window.innerHeight;

      const currentPageIndex = Math.floor(scrollY / pageHeight);

      if (currentPageIndex !== selected) setSelected(currentPageIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selected]);

  return (
    <header className='fixed w-full z-50'>
      <div className='flex flex-row justify-between items-center p-6 md:px-10 lg:p-0 lg:py-[4dvh] lg:pl-[4dvw]'>
        <Image src={logo} alt="logo" quality={100}
          className='sm:w-[40px] md:w-[48px] cursor-pointer'
          onClick={() => { scrollToTop() }} />
        <div className='absolute sm:hidden lg:block h-[1px] w-[473px] right-[800px]
         bg-primary z-50' />
        <Image src={HamburgerMenu}
          alt="hamburgerMenu"
          quality={100}
          className={`${isOpen ? 'hidden' : 'block'} md:hidden cursor-pointer z-50`}
          onClick={() => { setIsOpen(!isOpen) }} />
        <nav className={`
          fixed lg:static top-0 right-0
          ml-auto
          h-[100dvh] md:h-[96px]
          w-[254px] md:w-[450px] lg:w-[830px]
          bg-primary bg-opacity-[4%] backdrop-blur-2xl
           transition-all animate-openMenu
          ${isOpen ? 'block' : 'hidden'} md:flex
          z-49`}>
          <div className='flex flex-row-reverse w-full p-6 mt-2 md:hidden'>
            <Image src={closeMenu}
              alt="closeMenu"
              className='cursor-pointer'
              quality={100}
              onClick={() => { setIsOpen(!isOpen) }} />
          </div>
          <div className='flex 
          flex-col md:flex-row
          mt-9 md:mt-0
          items-end w-full 
          '>
            <ol className='flex
            flex-col md:flex-row
            w-11/12 md:w-full md:h-[58%] lg:h-2/3 gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-12
            md:px-12 lg:px-[123px]
            items-start md:items-center
            font-barlow-condensed text-mobileHeading5'>
              {links.map((link, index) => (
                <li key={`${link}-${index}`}
                  onClick={() => { setSelected(index); scrollToElement(`${link}`) }}
                  className='parent-group flex md:flex-col lg:flex-row flex-wrap 
                  w-full md:w-auto md:h-full 
                  justify-between cursor-pointer lg:items-center' >
                  <span className='font-bold block md:hidden lg:block w-7'>{index.toString().padStart(2, '0')}</span>
                  {link.toUpperCase()}
                  <div
                    className={`${selected === index ? 'bg-primary' : 'bg-transparent'} 
                  w-1 md:w-full h-8 md:h-1 ml-auto lg:self-end child-transition`} />
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </header>
  )
}
