import Head from 'next/head'
import ItemComponent from '@/components/item'

const api_url = (search, offset, limit) => `https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=${offset}&limit=${limit}`

export default function ItemsPage({ items, search, total, offset, limit }) {
  return (
    <>
      <Head>
        <title>Create Next App - Items</title>
      </Head>
      <h1>Items page {search}</h1>
      <p>Total: {total} - Offset: {offset} - Limit: {limit} - Display: {items.length}</p>
      {
        items.length === 0 ? ( <h1>No hay resultados</h1> )
        : (<ul> {items.map(item => <ItemComponent key={item.id} data={item} />)} </ul> )
      }
      
    </>
  )
}

export async function getServerSideProps({ query }) {
  const res = await fetch(api_url(query.search, 0, 4))
  const { results, paging } = await res.json()
  return {
    props: {
      items: results,
      search: query.search,
      total: paging.total,
      offset: paging.offset,
      limit: paging.limit
    },
  }
}