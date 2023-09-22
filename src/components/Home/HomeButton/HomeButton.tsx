"use client"

import { scrollToElement } from '@/utils/scroll'
import React from 'react'

export default function HomeButton() {
  return (
    <button className='relative group
    h-[150px] md:h-[242px] lg:h-[272px]
    w-[150px] md:w-[242px] lg:w-[272px]
    rounded-full
    text-mobileButtonText md:text-tabletButtonText lg:text-buttonText
    bg-white
    text-tertiary
    z-10'
      onClick={() => { scrollToElement('destination') }}
    >
      <span>EXPLORE</span>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-full h-full rounded-full bg-primary opacity-10 group-hover:scale-150
      -z-10'/>
    </button>
  )
}
