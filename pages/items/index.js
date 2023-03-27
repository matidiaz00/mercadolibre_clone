import Head from 'next/head'
import AsideComponent from '@/components/aside'
import ItemsComponent from '@/components/items'
import { searchItems } from '@/services/config';
import { setArrItems } from '@/services/model';

const default_items_lenght = 6;

export default function ItemsPage({ defaultItems, search, total, defaultOffset, limit }) {

  return (
    <main className='container mt-3'>
      <Head>
        <title>Create Next App - Items</title>
      </Head>
      <div className='row'>
        <AsideComponent
          search={search}
          total={total}
          className='col-12 col-md-3'
        />
        <section className='col-12 col-md-9'>
          <ItemsComponent
            defaultItems={defaultItems}
            search={search}
            total={total}
            defaultOffset={defaultOffset}
            limit={limit}
          />
        </section>
      </div>
    </main>
  )
}

export async function getServerSideProps({ query }) {
  
  if(!query) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  const { search } = query
  const offset = 0
  const limit = default_items_lenght

  const response = await searchItems(search, offset, limit)
  const { results, paging } = await response.json()
  const { items } = await setArrItems(results)

  return {
    props: {
      defaultItems: items,
      search: search,
      total: paging.total,
      defaultOffset: offset + default_items_lenght,
      limit: limit
    },
  }
}