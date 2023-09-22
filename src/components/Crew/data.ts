import crew1 from '@/public/assets/crew/image-douglas-hurley.png'
import crew2 from '@/public/assets/crew/image-mark-shuttleworth.png'
import crew3 from '@/public/assets/crew/image-victor-glover.png'
import crew4 from '@/public/assets/crew/image-anousheh-ansari.png'

import { StaticImageData } from 'next/image'

export interface Crew {
  image: StaticImageData,
  title: string,
  name: string,
  description: string,
}

const crew: Record<string, Crew> = {
  crew1: {
    image: crew1,
    title: 'Commander',
    name: 'Douglas Hurley',
    description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  crew2: {
    image: crew2,
    title: 'Mission Specialist ',
    name: 'MARK SHUTTLEWORTH',
    description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  crew3: {
    image: crew3,
    title: 'PILOT',
    name: 'Victor Glover',
    description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  crew4: {
    image: crew4,
    title: 'Flight Engineer',
    name: 'Anousheh Ansari',
    description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  },
}

export default crew;
