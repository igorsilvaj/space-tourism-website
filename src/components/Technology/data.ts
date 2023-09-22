import tech1L from '@/public/assets/technology/image-launch-vehicle-landscape.jpg'
import tech1P from '@/public/assets/technology/image-launch-vehicle-portrait.jpg'
import tech2L from '@/public/assets/technology/image-spaceport-landscape.jpg'
import tech2P from '@/public/assets/technology/image-spaceport-portrait.jpg'
import tech3L from '@/public/assets/technology/image-space-capsule-landscape.jpg'
import tech3P from '@/public/assets/technology/image-space-capsule-portrait.jpg'

import { StaticImageData } from 'next/image'

export interface Technology {
  image: {
    landscape: StaticImageData,
    portrait: StaticImageData
  },
  title: string,
  description: string,
}

const technology: Record<string, Technology> = {
  tech1: {
    image: {
      landscape: tech1L,
      portrait: tech1P
    },
    title: 'LAUNCH VEHICLE',
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  tech2: {
    image: {
      landscape: tech2L,
      portrait: tech2P
    },
    title: 'SPACEPORT',
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  tech3: {
    image: {
      landscape: tech3L,
      portrait: tech3P
    },
    title: 'SPACE CAPSULE',
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
}

export default technology;
