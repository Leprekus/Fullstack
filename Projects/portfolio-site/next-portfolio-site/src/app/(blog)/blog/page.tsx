
import Card from '@/components/Blog/Card';
import { client } from '@/lib/SanityClient';
import React from 'react';
import PostGrid from '../components/post-grid';
import { BLOG_POST } from '@/utils/sanity-fetch-constants';

export const metadata = {
  title: 'Raul Rodriguez Blog',
  description: 'This is me info dumping what I\'ve just learned',
};

const preload = () => {
  posts;
};


const posts = client.fetch(`*[_type == 'post'] ${BLOG_POST}`);


export default async function Page() {
  const data = await posts;

  return (
    <PostGrid posts={data}/>
  
  );
}
