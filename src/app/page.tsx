import Crew from '@/components/Crew/Crew'
import Destination from '@/components/Destination/Destination'
import Header from '@/components/Header/Header'
import Home from '@/components/Home/Home'
import Technology from '@/components/Technology/Technology'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </>
  )
}
