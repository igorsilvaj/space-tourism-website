"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import bgMobile from '@/public/assets/destination/background-destination-mobile.jpg'
import bgTablet from '@/public/assets/destination/background-destination-tablet.jpg'
import bgDesktop from '@/public/assets/destination/background-destination-desktop.jpg'
import destination from './data'

export default function Destination() {
  const [currDestination, setCurrDestination] = useState('moon');
  return (
    <section id='destination'
      className='relative min-h-[100dvh]
      pt-24 md:pt-36 lg:pt-[212px] px-6 md:px-10 lg:px-[80px]
      '>
      <Image
        alt="Background image"
        src={bgMobile}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 md:hidden object-fit'
      />
      <Image
        alt="Background image"
        src={bgTablet}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 hidden md:block lg:hidden object-cover'
      />
      <Image
        alt="Background image"
        src={bgDesktop}
        placeholder="blur"
        quality={100}
        fill
        sizes="100dvw"
        className='-z-50 hidden lg:block object-cover'
      />

      <div className='lg:flex lg:px-20 lg:justify-between max-w-[375px] md:max-w-[768px] lg:max-w-[1280px] mx-auto'>
        <div className='lg:w-[510px] lg:h-[560px] lg:flex lg:flex-col lg:justify-between'>
          <p className='font-barlow-condensed
            text-mobileHeading5 md:text-tabletHeading5 lg:text-heading5
            text-primary 
            flex justify-center md:justify-start gap-[18px] relative'>
            <span className='opacity-25'>01</span>
            PICK YOUR DESTINATION
          </p>
          <Image
            alt="destination"
            src={destination[currDestination].image}
            placeholder="blur"
            quality={100}
            className='w-[170px] md:w-[300px] lg:w-[445px] mx-auto lg:my-0 my-7 md:my-16'
          />
        </div>
        <div className='lg:w-[442px] lg:flex lg:flex-col lg:items-start lg:justify-end'>
          <nav>
            <ul className='flex justify-center gap-7 font-barlow-condensed text-mobileNavText md:text-tabletNavText h-7'>
              {Object.keys(destination).map((dest) => (
                <li
                  key={dest}
                  onClick={() => { setCurrDestination(dest) }}
                  className={`parent-group ${currDestination === dest ? 'text-primary' : 'text-secondary'}
                  cursor-pointer flex flex-col justify-between `}>
                  {dest.toUpperCase()}
                  <div className={`child-transition ${currDestination === dest ? 'bg-primary' : 'bg-transparent'} w-full h-[3px]`} />
                </li>
              ))}
            </ul>
          </nav>
          <h2 className='text-mobileHeading2 md:text-tabletHeading2 uppercase text-center mt-7 md:my-7 lg:mt-12'>
            {destination[currDestination].title}
          </h2>
          <p className='font-barlow text-mobileTextBase md:text-tabletTextBase lg:text-base 
          max-w-[571px] lg:max-w-[444px]
          m-auto lg:m-0 text-center lg:text-start text-secondary'>{destination[currDestination].description}</p>

          <div className='bg-[#383B4B] w-full md:w-[573px] lg:w-[444px] m-auto h-[1px] my-7 lg:mt-16 lg:mb-8' />

          <div className='flex flex-wrap justify-center lg:justify-start gap-x-20'>
            <div className='flex flex-col items-center lg:items-start h-16 gap-y-3 mb-10 lg:m-0'>
              <p className='font-barlow-condensed text-mobileSubheading2 uppercase text-secondary'>AVG. DISTANCE</p>
              <p className='text-mobileSubheading1 uppercase'>{destination[currDestination].avgDistance}</p>
            </div>

            <div className='flex flex-col items-center lg:items-start h-16 gap-y-3 mb-16 lg:mb-0'>
              <p className='font-barlow-condensed text-mobileSubheading2 uppercase text-secondary'>Est. travel time</p>
              <p className='text-mobileSubheading1 uppercase'>{destination[currDestination].estTravelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
