import FeedbackForm from '@/components/FeedbackForm';
import './globals.css';
import NavbarMain from '@/components/navbar-main';
import Head from 'next/head';
import ModalProvider from '@/providers/ModalProvider';
import { Toaster } from 'react-hot-toast'
export const metadata = {
  title: 'My Portfolio',
  description: 'Frontend Portfolio by Raul Rodriguez',
  icons: 'memoji.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NavbarMain/>
        <ModalProvider/>
          <main className='
          min-h-screen 
          w-full flex 
          justify-center 
          items-center 
          bg-zinc-50 
          max-w-7xl 
          mx-auto
          pt-28 
          pb-44
          sm:pb-0
          overflow-x-hidden
          '>
          {children}
        </main>
        <FeedbackForm/>
        <Toaster/>
      </body>
    </html>
  );
}
