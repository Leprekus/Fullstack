import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from 'react-hot-toast'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
    <>
    <Toaster/>
    <Header/>
    <main className='w-full mx-auto max-w-7xl relative top-40 lg:top-0'>
        {children}
    </main>
    <Footer/>
    </>
  )
}
