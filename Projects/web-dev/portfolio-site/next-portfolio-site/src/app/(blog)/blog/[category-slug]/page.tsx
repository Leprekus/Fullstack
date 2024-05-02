import PortableText from 'react-portable-text'
import client, { urlFor } from '@/lib/SanityClient';
import React from 'react'
import Image from 'next/image';
import Author from '@/components/Blog/Author';
import PostGrid from '../../components/post-grid';
import { BLOG_POST } from '@/utils/sanity-fetch-constants';

export default async function BlogPost({ params }: { params: { 'category-slug': string }}) {

    const [ category ]: [ ICategory ] = await client.fetch(`*[_type == 'category' && slug.current == '${params['category-slug']}']{
      _createdAt,
      _type,
      description,
      _id,
      title,
      _updatedAt,
      posts [] ->${BLOG_POST}
    }`);
    
  return (
    <>
      <div className='
        mx-auto
        max-w-sm
        md:max-w-md
        lg:max-w-lg
        flex
        flex-col
        items-center
        '>
        <h1>{ category.title}</h1>
        <p className='text-gray-600'>{ category.description }</p>
      </div>
      <PostGrid posts={category.posts || [] }/>
    </>
  )
}
