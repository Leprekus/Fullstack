import Head from 'next/head'
import React, { type ReactNode } from 'react'
import NavbarMain from '../navbar-main'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <Head>
    <title>Digital Enterprise Solutions</title>
    <meta name="description" content="Harness the power of innovation, implement strategies uniquely tailored to your needs." />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <NavbarMain/>
    {/* margin in main compensates navbar height */}
    <main className='w-full max-w-7xl mx-auto min-h-screen max-h-screen flex items-start justify-center pt-20'>
      { children }
    </main>

  </>
  )
}
