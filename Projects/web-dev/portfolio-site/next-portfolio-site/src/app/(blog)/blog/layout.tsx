import NavWrapper from "@/components/Wrappers/NavWrapper";
import client from '@/lib/SanityClient';
import Categories from '../components/categories';


export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const categories = await client.fetch(`*[_type =='category'] {
    slug,
    title,
    description,
      _id
  }`)

  return (
    <section>
      <NavWrapper/>
      <Categories categories={categories}/>
      {children}
    </section>
  );
}
