import './globals.css'
import type { Metadata } from 'next'
import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google'

const bellefair = Bellefair({
  subsets: ['latin'],
  variable: '--font-bellefair',
  weight: ['400']
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400']
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable} font-bellefair`}>{children}</body>
    </html>
  )
}
