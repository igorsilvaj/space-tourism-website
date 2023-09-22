import Image from 'next/image'
import React from 'react'
import bgMobile from '@/public/assets/home/background-home-mobile.jpg'
import bgTablet from '@/public/assets/home/background-home-tablet.jpg'
import bgDesktop from '@/public/assets/home/background-home-desktop.jpg'
import HomeButton from './HomeButton/HomeButton'

export default function Home() {
  return (
    <section id="home" className='relative
    h-[100dvh] min-h-[667px] md:min-h-[1024px] lg:min-h-[900px]
    w-full min-w-[375px] 
    flex flex-col'>
      <Image
        alt="Background image"
        src={bgMobile}
        placeholder="blur"
        quality={100}
        sizes="100dvw"
        fill
        className='-z-50 md:hidden object-cover object-center '
      />
      <Image
        alt="Background image"
        src={bgTablet}
        placeholder="blur"
        quality={100}
        sizes="100dvw"
        fill
        className='-z-50 hidden md:block lg:hidden object-cover'
      />
      <Image
        alt="Background image"
        src={bgDesktop}
        placeholder="blur"
        quality={100}
        sizes="100dvw"
        fill
        className='-z-50 hidden lg:block object-cover'
      />

      <div className='flex
      items-center lg:items-end
      flex-col lg:flex-row
      lg:justify-between lg:px-40
      w-full lg:w-[1440px]
      mt-[112px] md:mt-[202px] lg:mt-[380px]
      '>
        <div className='flex flex-wrap flex-col justify-between
        items-center lg:items-start
        text-center lg:text-left
        h-[276px] md:h-[334px] lg:h-[382px]
        w-[327px] md:w-[450px] lg:w-[474px]
        '>
          <p className="font-barlow-condensed text-mobileHeading5 md:text-tabletHeading5 lg:text-heading5 text-secondary">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="text-mobileHeading1 md:text-heading1 text-primary">SPACE</h1>
          <p className="font-barlow text-mobileTextBase md:text-tabletTextBase lg:text-base md:max-w-[444px] text-secondary">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='mt-[80px] md:mt-[160px] lg:mt-[0px]'>
          <HomeButton />
        </div>
      </div>
    </section>
  )
}
