import { type ReactNode } from 'react';

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return (
    <main className='flex items-center justify-center h-screen'>{ children }</main>
  )
}