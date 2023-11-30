import { Toaster } from 'react-hot-toast'
import Sidebar from './components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <>
    <Toaster/>
    <main className='w-full mx-auto max-w-7xl'>
        <Sidebar>{children}</Sidebar>
    </main>
 
    </>
  )
}
