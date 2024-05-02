import PortableText from 'react-portable-text'
import client, { urlFor } from '@/lib/SanityClient';
import React from 'react'
import Image from 'next/image';
import Author from '@/components/Blog/Author';

export default async function BlogPost({ params }: { params: { slug: string }}) {

    const [ post ] = await client.fetch(`*[_type == 'post' && slug.current == '${params.slug}']{
      _updatedAt,
      slug,
      mainImage,
      body,
      author -> {
        name, 
        image,
        bio,
      },
      _createdAt,
      _type,
      _id,
      title
    }`);

  return (
    <article className='px-14 lg:px-72 text-justify text-gray-600'>
      <Image className='rounded-md mx-auto pb-4 shadow-md shadow-slate-200'
       src={urlFor(post.mainImage.asset._ref)} width={600} height={400} alt='hero-banner'/>
      <Author post={post}/>
      <h1 className='w-fit text-6xl text-gray-900'>{post.title}</h1>
      <hr  className='h-1 w-full my-6'/>
      <PortableText
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      content={post.body}
      serializers={{
        h1:(props: any) => (<h1 className='text-gray-900' { ...props }/>),
        h2:(props: any) => (<h2 className='text-gray-900' { ...props }/>),
        h3:(props: any) => (<h3 className='text-gray-900' { ...props }/>),
        h4:(props: any) => (<h4 className='text-gray-900' { ...props }/>),
        h5:(props: any) => (<h5 className='text-gray-900' { ...props }/>),
        h6:(props: any) => (<h6 className='text-gray-900' { ...props }/>),
        li:({ children }: any) => (<li className=''>{ children }</li>),
        link:({ href, children }: any) => (<a href={href}>{ children }</a>),
        image:(value: any) => {
          console.log({ value })
          return(<Image width={400} height={400} alt='media' className='rounded-md overflow-hidden w-96 h-auto my-6 mx-auto' src={urlFor(value.asset._ref)} />)
        },
        p:(children: any) => (<p className='text-base md:text-md text-red-500'>{ children }</p>)
      }}
      />
    </article>
  )
}
