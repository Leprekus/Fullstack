import React, { CSSProperties, MouseEventHandler } from 'react'

export default function HamburgerMenu({ onClick, translate, transformX, transformY}:{ onClick: MouseEventHandler, translate: string, transformX: CSSProperties, transformY: CSSProperties }) {
  return (
    <div
        onClick={onClick}
        className={`rounded-full bg-[#1d202c]
        h-12 w-12 p-3 m-2 hover:cursor-pointer active:bg-[#1b1e29]
        flex justify-evenly flex-col transition-all z-10 relative
        ${translate} translate-x- sm:hidden`}
      >
         <span
          style={transformX}
          className={`h-1 w-full rounded-full bg-opacity-50 bg-pink-600 relative`}
        />
        <span
          style={transformY}
          className={`h-1 w-full rounded-full bg-opacity-50 bg-pink-600  relative`}
        />
      </div>
  )
}
