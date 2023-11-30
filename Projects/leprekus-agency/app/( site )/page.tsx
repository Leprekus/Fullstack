
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from '@/components/ui/link'
import { HardDriveUpload, LayoutTemplate, Store, ArrowRight } from 'lucide-react'
export default function Home() {
  const cardInfo = [
    {
      title: 'Data driven insights',
      icon: <HardDriveUpload/>,
      content: 'Use data as a tool to create new business opportunities and improve existing products, systems, and operations.',
      href: '/services#Api Development',
    },
    {
      title: 'Web design',
      icon: <LayoutTemplate />,
      content: 'Leave impactful impressions, create loyal customers, and drive sales with beautiful websites crafted websites.',
      href: '/services#Web Design',
    },
    {
      title: 'Digital business solutions',
      icon: <Store />,
      content: 'Implement web solutions tailored to your unique business needs. ',
      href: '/services#Strategy & consulting',
    },
  ]

  const statistics = [
    {
      title: '20k views ',
      label: 'Reach a wider audience with online presence',
    },
    {
      title: '15% higher',
      label: 'Drive revenue and customer conversion up',
    },
    {
      title: '2x faster',
      label: 'Faster decision making with access to real-time data',
    },
    {
      title: '-30% costs',
      label: 'Reduce operational costs with cloud infrastructure',
    },
  ]
  return (
    <>
    <div className=" 
      w-full 
      mt-20 
      space-y-8 
      pt-20
      pb-44
      ">
        
        <h1 className='
        text-xl 
        font-bold 
        tracking-tighter
        mx-auto

        sm:text-2xl
        md:text-3xl 
        lg:text-5xl 

        max-w-sm
        md:max-w-2xl
        lg:max-w-5xl

        text-center
        '>
          The complete platform to suit your business needs on the web.
        </h1>

        <p className='
        text-justify
        text-sm
        sm:text-base
        md:text-lg

        text-gray-600
        w-fit
        mx-auto

        max-w-xs
        md:max-w-lg
        lg:max-w-4xl
        '>
          All your digital business needs and solutions concentrated in one place. 
          Streamline the process. Scalable, secure, and reliable web solutions.

        </p>

    </div>

    <div className='
    bg-muted
    py-4 
    flex 
    gap-4 
    items-center 
    justify-center

    flex-col
    md:flex-row
    '>
        {cardInfo.map(({ title, icon, content, href}) => (
          <Card 
            key={title}
            className=' w-80 text-sm overflow-hidden'
          >
            <CardHeader>
              <CardTitle className='flex justify-between items-center text-gray-700'>
                { title }
                <span className='text-gray-400'>{ icon }</span>
              </CardTitle>
            </CardHeader>
            <CardContent className='h-[104px] text-gray-600'>
              { content }
            </CardContent>
            <CardFooter className='border-t bg-zinc-50 h-14'>
              <Link 
              className='flex items-center gap-1 group pt-4'
              variant='link' 
              href={href}
              >
                Learn more
                <ArrowRight 
                  className='text-muted-foreground transition group-hover:translate-x-1'
                  size={16}
                />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='
      grid 
      grid-cols-2 
      grid-rows-2 
      py-20
      gap-14
      mx-auto 
      justify-items-center 
      items-start
      w-96 md:w-[500px]
      '>
        {statistics.map(item => (
          <div 
            key={item.title}
            className='col-span-1 row-span-1 w-52'
            >
            <h2 className='text-4xl font-bold'>{ item.title }</h2>
            <p>{ item.label }</p>
          </div>
        ))}
        
      </div>
      </>
    
  )
}
