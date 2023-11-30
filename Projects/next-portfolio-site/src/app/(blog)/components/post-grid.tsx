import Card from '@/components/Blog/Card';

interface PostGridProps {
  posts: IBlogPost[]
}
export default function PostGrid({ posts }: PostGridProps) {

  if(posts.length === 0) return <p className='
    font-bold text-gray-800 text-xl w-fit mx-auto my-4'>
      No posts yet...
    </p>
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      {posts.map((post:IBlogPost) => (
        <Card key={post._id} post={post}/>
    
      ))}
    </div>
  )
}