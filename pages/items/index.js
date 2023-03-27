import Head from 'next/head'
import AsideComponent from '@/components/aside'
import ListComponent from '@/components/list'
import SEO from '@/services/SEO.json'

const default_items_lenght = 6;

export default function ItemsPage({ search }) {
  return (
    <main className='container mt-3'>
      <Head>
        <title>{ search ? search.toUpperCase() : null } | MercadoLibre 📦</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content={SEO.description} data-head-react="true" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="og:title" property="og:title" content={SEO.title} />
        <meta name="og:description" property="og:description" content={SEO.description} />
      </Head>
      <div className='row'>
        <AsideComponent
          search={search}
          total={2000}
          className='col-12 col-md-3'
        />
        <section className='col-12 col-md-9'>
          <ListComponent 
            defaultItems={[]}
            search={search}
            total={2000}
            limit={default_items_lenght}
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

  return {
    props: {
      search: search,
    },
  }

  /*
  const { search } = query
  const limit = default_items_lenght

  const response = await searchItems(search, offset, limit)
  const { results, paging } = await response.json()
  const { items } = await setArrItems(results)
  
  return {
    props: {
      defaultItems: items,
      search: query.search,
      total: paging.total,
      limit: limit
    },
  }
  */
}