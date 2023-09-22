"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import bgMobile from '@/public/assets/crew/background-crew-mobile.jpg'
import bgTablet from '@/public/assets/crew/background-crew-tablet.jpg'
import bgDesktop from '@/public/assets/crew/background-crew-desktop.jpg'
import crew from './data'

export default function Crew() {
  const [currCrew, setCurrCrew] = useState('crew1');

  return (
    <section id='crew'
      className='relative min-h-[100dvh]
      pt-24 md:pt-[136px] lg:pt-[212px] px-6 md:px-10 lg:pr-0 lg:pl-40
      flex justify-center overflow-hidden'>
      <Image
        alt="Background image"
        src={bgMobile}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 md:hidden object-cover mix-blend-screen opacity-50'
      />
      <Image
        alt="Background image"
        src={bgTablet}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 hidden md:block lg:hidden object-cover mix-blend-screen opacity-50'
      />
      <Image
        alt="Background image"
        src={bgDesktop}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 hidden lg:block object-cover mix-blend-screen opacity-50'
      />
      
      <div className='md:flex md:flex-col md:justify-between lg:flex-row lg:justify-between
        w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1280px] md:relative md:max-h-[890px] lg:max-h-[690px]'>
        <div className='flex flex-col items-center lg:items-start lg:justify-end md:order-2 lg:min-w-[665px] border-b border-[#383B4B] md:border-none mb-7 md:mb-0'>
          <p className='font-barlow-condensed text-primary
            text-mobileHeading5 md:text-tabletHeading5 lg:text-heading5
            flex justify-center md:justify-start gap-[18px] md:absolute md:top-0 lg:left-0
            w-full'>
            <span className='opacity-25'>02</span>
            MEET YOUR CREW
          </p>
          <div className='flex mt-7 lg:m-0 
          w-[200px] h-[195px] md:w-[550px] md:h-[540px] lg:w-[665px] lg:h-[655px]'>
            <Image
              alt={`crew member ${crew[currCrew].name}`}
              src={crew[currCrew].image}
              placeholder="blur"
              quality={100}
              sizes="(max-width: 767px) 195px, (min-width: 768px) and (max-width: 1439px) 550px, 700px"
              className='object-contain h-full w-full'
            />
          </div>
        </div>
        <div className='flex flex-col md:items-center lg:items-start lg:justify-center lg:min-w-[614px] md:order-1'>
          <nav className='md:order-2'>
            <ul className='flex flex-wrap gap-4 justify-center'>
              {Object.keys(crew).map((cr) => (
                <li
                  key={cr}
                  onClick={() => { setCurrCrew(cr) }}
                  className='cursor-pointer'
                >
                  <div className={`bg-primary ${currCrew === cr ? 'opacity-100' : 'opacity-20'} w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full`} />
                </li>
              ))}
            </ul>
          </nav>
          <h2 className='text-mobileHeading4 md:text-tabletHeading4 lg:text-heading4 text-center lg:text-start
          uppercase opacity-50 mt-8 md:mt-20 lg:mt-40 my-4'>
            {crew[currCrew].title}
          </h2>
          <h2 className='text-mobileHeading3 md:text-tabletHeading3 lg:text-heading3 text-center lg:text-start uppercase mb-4 lg:min-h-[83px]'>
            {crew[currCrew].name}
          </h2>
          <p className='font-barlow text-secondary
        text-mobileTextBase md:text-tabletTextBase lg:text-base text-center lg:text-start md:mb-8 md:max-w-[520px] lg:w-[450px] lg:min-h-[250px]'>
            {crew[currCrew].description}
          </p>
        </div>
      </div>
    </section>
  )
}
