"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import bgMobile from '@/public/assets/technology/background-technology-mobile.jpg'
import bgTablet from '@/public/assets/technology/background-technology-tablet.jpg'
import bgDesktop from '@/public/assets/technology/background-technology-desktop.jpg'
import tech from './data'

export default function Technology() {
  const [currTech, setCurrTech] = useState('tech1');

  return (
    <section id='technology'
      className='relative min-h-[100dvh] pt-24 md:pt-36 lg:p-0 lg:pt-[212px] lg:pl-[80px] overflow-hidden'>
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

      <div className='lg:flex lg:flex-wrap lg:pl-[40px] lg:justify-between
        max-w-[375px] md:max-w-[768px] lg:max-w-[1280px] mx-auto'>
        <div className='mb-8 md:mb-14 lg:w-full'>
          <p className='font-barlow-condensed text-primary
            text-mobileHeading5 md:text-tabletHeading5 lg:text-heading5
            flex justify-center md:justify-start gap-[18px] md:pl-10 lg:pl-0'>
            <span className='opacity-25'>03</span>
            SPACE LAUNCH 101
          </p>
        </div>
        <div className='lg:flex lg:flex-row-reverse lg:gap-36 lg:max-h-[530px]'>
          <div className='min-w-[375px] h-[170px] md:h-[310px]
          md:min-w-[768px] lg:min-w-[515px] lg:min-h-[527px]   
          md:mb-14 lg:m-0'>
            <Image
              alt={`Technology - ${tech[currTech].title}`}
              src={tech[currTech].image.landscape}
              placeholder="blur"
              quality={100}
              sizes="(max-width: 767px) 375px, (min-width: 768px) and (max-width: 1439px) 768px"
              className='lg:hidden object-cover h-full w-full'
            />
            <Image
              alt={`Technology - ${tech[currTech].title}`}
              src={tech[currTech].image.portrait}
              placeholder="blur"
              quality={100}
              sizes="515px"
              className='sm:hidden lg:block object-contain h-full w-full'
            />
          </div>
          <div className='lg:flex lg:gap-20 lg:items-center lg:min-w-[626px]'>
            <nav>
              <ul className='flex lg:flex-col flex-wrap gap-4 lg:gap-8 justify-center my-8 md:mb-12 lg:m-0'>
                {Object.keys(tech).map((tec, index) => (
                  <li
                    key={tec}
                    onClick={() => { setCurrTech(tec) }}
                    className={`${currTech === tec ? 'bg-primary text-tertiary' : ''}
                      text-mobileHeading4 md:text-tabletHeading4 lg:text-Heading4 md:tracking-[1.5px] lg:tracking-[2px]
                      flex items-center justify-center
                      cursor-pointer border-primary border-[1px] border-opacity-25 rounded-full
                      h-10 w-10 md:h-[60px] md:w-[60px] lg:h-20 lg:w-20
                      hover:border-opacity-100`}>
                    {index + 1}
                  </li>
                ))}
              </ul>
            </nav>

            <div className='text-center lg:text-start lg:flex lg:flex-col lg:h-[304px] lg:min-w-[472px]'>
              <p className='font-barlow-condensed text-mobileSubheading2 md:text-navText text-secondary mb-4 md:mb-7 lg:mb-6'>THE TERMINOLOGY…</p>
              <h2 className='text-mobileHeading3 md:text-tabletHeading3 lg:text-heading3 mb-6 lg:mb-6'>{tech[currTech].title}</h2>
              <p className='font-barlow text-mobileTextBase md:text-tabletTextBase lg:text-base text-secondary 
              w-[327px] md:w-[441px] mx-auto mb-10 lg:m-0 '>
                {tech[currTech].description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
