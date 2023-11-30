import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className='flex flex-col gap-4 w-fit'>
          <h3>Contact</h3>
          <span className='flex gap-x-2 text-zinc-500 hover:text-zinc-400 underline transition-all'>✉️<Link href='mailto:raulrodriguez@leprekus.dev'>raulrodriguez@leprekus.dev</Link></span>
          <span className='flex gap-x-2 text-zinc-500 hover:text-zinc-400 underline transition-all'>🐦<Link href='https://twitter.com/rc_rdz' target='_blank'>twitter.com/rc_rdz</Link></span>
          <span className='flex gap-x-2 text-zinc-500 hover:text-zinc-400 underline transition-all'>🔗<Link href='https://www.linkedin.com/in/raul-rodriguez-4a0037192/' target='_blank'>www.linkedin.com/in/raul-rodriguez</Link></span>
          <span className='flex gap-x-2 text-zinc-500 hover:text-zinc-400 underline transition-all'>💻<Link href='https://github.com/leprekus' target='_blank'>github.com/leprekus</Link></span>
          <span className='flex gap-x-2 text-zinc-500 hover:text-zinc-400 underline transition-all'>📄<Link download='/assets/resume.pdf' href='/assets/resume.pdf' target='_blank'>Download CV</Link></span>
          <Link href='/assets/resume.pdf' target='_blank' className='py-1 px-3 bg-black w-fit text-white rounded-md transition all border-2 border-black hover:bg-white hover:text-black'>PDF View</Link>
      </div>
  )
}
