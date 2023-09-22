import moon from '@/public/assets/destination/image-moon.png'
import mars from '@/public/assets/destination/image-mars.png'
import europa from '@/public/assets/destination/image-europa.png'
import titan from '@/public/assets/destination/image-titan.png'
import { StaticImageData } from 'next/image'

export interface Destination {
  image: StaticImageData,
  title: string,
  description: string,
  avgDistance: string,
  estTravelTime: string
}

const destination: Record<string, Destination> = {
  moon: {
    image: moon,
    title: 'moon',
    description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avgDistance: '384,400 km',
    estTravelTime: '3 days'
  },
  mars: {
    image: mars,
    title: 'mars',
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avgDistance: '225 MIL. km',
    estTravelTime: '9 months'
  },
  europa: {
    image: europa,
    title: 'europa',
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avgDistance: '628 MIL. km',
    estTravelTime: '3 years'
  },
  titan: {
    image: titan,
    title: 'titan',
    description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avgDistance: '1.6 BIL. km',
    estTravelTime: '7 years'
  },
}

export default destination;
