import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import { getBillboard } from '@/actions/billboards.actions';
import { getProducts } from '@/actions/products.actions';
import ProductList from '@/components/product-list';

export const revalidate = 0
export default async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('0e03495f-d152-4306-9524-9c9a63c78036')
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
      
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList
          title='Featured Products'
          items={products}
        />
      </div>
      </div>
    </Container>
  )
}