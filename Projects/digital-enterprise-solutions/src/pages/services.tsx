import React from 'react'
import MainLayout from '~/components/layouts/main-layout'

export default function Services() {
  return (
    <MainLayout>
        <div className='flex '>
            <div className='shadow shadow-slate-300 p-10'><p>Web Development</p></div>
            <div><p>UI / UX Design</p></div>
            <div><p>Analytics</p></div>
            <div><p>Custom Web Application Developmen</p></div>
        </div>
    </MainLayout>
  )
}
