import React, { type ReactNode } from 'react'

export default function SectionLayout({ children }: { children: ReactNode} ) {
  return (
<section className='mx-auto flex flex-col gap-4 p-10 h-full min-w-full'>{ children }</section>
  )
}
