import Link from 'next/link'
import React from 'react'
import Contact from './Contact'

export default function Resume() {
  return (
    <section className='px-6 py-6 max-w-5xl flex flex-col items-center'>
      <span className='text-8xl'>📋</span>
  
   
      <h1>Resume</h1>

      <div className='flex gap-4 flex-wrap w-full justify-around'>
        <div className='bg-zinc-200 flex gap-x-2 p-4 rounded-sm w-48'>
        <span>👋</span>
        I&apos;m a React software engineer based in Victoria
        with 2 years of experience in the Tech Industry. I am
         passionate about learning new technologies.
        </div>
        <Contact/>
      </div>

      <ul className='flex flex-col gap-y-4tec'>
        <li><h2>Experience</h2></li>
        <li> <h3>Education</h3></li>
        <li><p className='text-zinc-500'>Codecademy Frontend Engineer Path, <i>Vancouver, Canada – (November 2021 - December 2022)</i></p></li>
      </ul>
      <ul className='list-disc ml-8 flex flex-col gap-2'>
        <li><p>Web Foundations: I built, stylized, and locally deployed static sites using simple HTML and CSS. </p></li>
        <li><p>Improved Styling with CSS: I learned fundamentals of web design such as mobile-first-approach, and the implementation of responsive web design.</p></li>
        <li><p>Building Interactive Websites: I learned to use JavaScript as a programming language. This module also taught me how to make sites interactive with the use of JavaScript. I also learned to implement Github into my workflow. Finally, in this module, I also deployed my first <Link href='https://portfolio-site-theta-rose.vercel.app/' className='text-zinc-500 hover:text-zinc-300 transition-all underline'>portfolio-site concept.</Link> </p></li>
        <li><p>Front-End Development: In this module I learned the skills needed to create and deploy fully interactive web applications. I learned how to perform HTTP requests, write unit tests, work with APIs and use the React Library to write my applications.</p></li>
        <li><p>Interview Prep: This is the final module in the career path. Here I learned linear and complex data structures. This includes creating, traversing and implementing them into my applications. This module also covers algorithms, and I created my final Front-End Project. </p></li>
      </ul>
      <hr className='w-full my-10'/>
      <ul className='flex flex-col gap-4'>
        <li><h2>Skills</h2></li>
        <li>
        <h3>JavaScript</h3>
        <p>My &quot;native&quot; programming language, I have worked with it for the past two years. I have used JavaScript in my front-end applications alongside React, Redux, and Next.Js. JavaScript is also my language of choice for backend and API integration. Furthermore, I use JavaScript to write unit and end-to-end test using Cypress.</p>
        </li>
        <li>
        <h3>TypeScript</h3>
        <p>I started learning this superset of JavaScript in January of 2023 and have been using it since in all of my applications. I am since able to write type-safe reliable applications that have saved me from many headaches before launching to production.</p>
        </li>
        <li>
        <h3>Next.Js</h3>
      <p>Next.Js is the second framework I ever worked with (first one was Redwood.Js) and I immediately fell in love with. Its design patterns and workflow are really developer friendly. And I have gained a good amount of experience since I started using it in early January 2023 having developed all of my applications using Next since.</p>
        </li>
        <li>
        <h3>Technical writing</h3>
      <p>I enjoy technical writing. Mainly because I am able to write about the new things that I have learned and it helps me solidify my understanding. This has two pros, one I am able to reach an audience and teach useful information, and at the same time it serves as notes for me to go back on and quickly freshen up on a topic.</p>
        </li>
      </ul>
      <hr className='w-full my-10'/>
      <ul className='flex flex-col w-full'>
        <li>
          <h2>Projects</h2>
          </li>
        <li>
          <h3>TLDR; (Reddit Clone):</h3>
          <p>Created with Next.Js and next-auth. The app handles user authentication, stores the user session and 
          automatically handles token rotation in order to provide a seamless user-experience. The app uses the reddit api to fetch posts and offer 
          interactivity. On the backend, the text posts get processed in order to provide a summarized version in order save the user time and allow
          it to only retrieve the most useful information. The app is designed with the intent to reduce screen-time while still being able to browse
          your favorite app!</p>
        </li>
        {/* <li>
          <h3>E-Commerce</h3>
          <p>A Fullstack ecommerce implementation. The site offers a payment gateway, and the option to create an account. Accounts have added features such as 
            allowing the user to create collections of their preferred items. A collection can be directly checked out or each item can be purchased individually. 
            As the site admin the site offers full CMS support that allows the an admin to create, edit, update, and delete products.
          </p>
          </li> */}

        <li>


        </li>
      </ul>
      <ul className='flex flex-col gap-4 w-full '>
        <li><h2>Languages</h2></li>
        <li>
        <h3>Spanish 🇲🇽</h3>
        <p>Native speaker</p>
        </li>
        <li>
          <h3>English 🇨🇦</h3>
          <p>Native speaker</p>
          </li>
        <li>
          <h3>German  🇩🇪</h3>
          <p>B1 Level, able to keep a conversation</p>
          </li>
        <li>
          <h3>Japanese  🇯🇵</h3>
          <p>Basic Language Skills </p>
          </li>
      </ul>
      <hr className='w-full my-10'/>
      <ul className='flex flex-col w-full'>
        <li><h2>Education</h2></li>
        <li><h3>Bachelor&apos;s Degree in Computer Science</h3></li>

        <li><p className='text-zinc-500'>2023 (currently studying here)</p></li>
        <li><p>University of Victoria - Victoria, BC</p></li>

      </ul>
      <hr className='w-full my-10'/>
      <div className='flex w-full'><Contact/></div>

    </section>
  )
}
