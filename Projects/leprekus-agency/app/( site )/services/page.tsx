import { Separator } from '@/components/ui/separator'

export default function page() {

  const serviceInfo = [
    {
      title: "Api Development",
      description: 'Our Api Development service is designed to create robust and efficient application programming interfaces (APIs) tailored to your specific needs. We excel in crafting seamless connections between various software components, enabling smooth data exchange and functionality integration.',
    },
    {
      title: "Web Design",
      description: 'Web Design is at the heart of captivating online experiences. With our creative expertise, we bring your vision to life with stunning visuals and user-friendly interfaces. We prioritize aesthetics and usability to ensure your website stands out in the digital landscape.',
    },
    {
      title: "Third Party Integrations",
      description: 'Seamlessly integrate third-party services and tools into your software ecosystem with our Third-Party Integrations service. We streamline the process, making it easier for your application to leverage the power of external platforms and enhance its capabilities.',
    },
    {
      title: "Web Application",
      description: 'Transform your ideas into dynamic and interactive Web Applications with our expertise. Our Web Application service empowers you to deliver feature-rich, user-friendly, and scalable web-based solutions that cater to your unique business requirements.',
    },
    {
      title: "Custom",
      description: 'When off-the-shelf solutions don\'t quite fit the bill, our Custom development service steps in. We specialize in tailoring software solutions precisely to your needs, ensuring they align perfectly with your goals and provide a competitive edge.',
    },
    {
      title: "Strategy & consulting",
      description: 'In the fast-paced world of technology, having a clear strategy and expert guidance is paramount. Our Strategy & Consulting service offers invaluable insights and recommendations to help you make informed decisions, optimize processes, and achieve long-term success.',
    },
  ]
  return (
    <div>
      {serviceInfo.map(({ title, description }) => (
        <>
        <section 
          key={title}
          className='pb-20 space-y-4 pt-10 px-10'
        >
          <h1 className='text-2xl font-bold' id={title}>{ title }</h1>
          <p className='text-gray-600'>{ description }</p>
        </section>
        <Separator/>
        </>
      ))}

    </div>
  )
}