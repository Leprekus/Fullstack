import { type ReactNode, Children} from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonGroupProps {
  children: ReactNode;
  className?: string
}
export default function ButtonGroup({ children, className }: ButtonGroupProps) {

  if(!children) return null
  return (
    <div className={twMerge(`flex border rounded-[7px] w-fit h-fit overflow-hidden shadow`, className)}>
      {Children.map(children, (child: ReactNode, i: number) => (
          <button
            className={`hover:bg-gray-100 px-2 py-1 transition last ${i !== 0 && 'border-l'}`}
            key={i}>{child}</button>
        )
      )}
    </div>
  )
}