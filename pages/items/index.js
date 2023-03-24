import Head from 'next/head'
import ItemComponent from '@/components/item'
import { searchItems } from '@/services/config'
import { setArrItems } from '@/services/model'
import { useState } from 'react';

export default function ItemsPage({ defaultItems, search, total, defaultOffset, limit }) {

  const [items, addItems] = useState(defaultItems);
  const [offset, changeOffset] = useState(defaultOffset);

  const getMore = async () => {
    changeOffset(offset + 4)
    const response = await fetch(`/api/items?search=${search}&offset=${offset}&limit=${limit}`)
    const newItems = await response.json()
    addItems([...items, ...newItems.items])
  }

  return (
    <>
      <Head>
        <title>Create Next App - Items</title>
      </Head>
      <h1>Items page {search}</h1>
      <p>Total: {total} - Offset: {offset} - Limit: {limit} - Display: {items.length}</p>
      {
        items.length === 0 ? ( <h1>No hay resultados</h1> )
        : (
          <>
            <ul> {items.map((item, index) => <ItemComponent index={index} key={item.id} data={item} />)} </ul>
            {
              offset >= total - defaultOffset ? ( <span>No hay más resultados</span> )
              : ( <button type='button' onClick={ getMore }>Ver más</button> )
            }
          </>
        )
      }
    </>
  )
}

export async function getServerSideProps({ query }) {
  const { search } = query
  const offset = 0
  const limit = 4

  const response = await searchItems(search, offset, limit)
  const { results, paging } = await response.json()
  const { items } = await setArrItems(results);

  return {
    props: {
      defaultItems: items,
      search: query.search,
      total: paging.total,
      defaultOffset: offset + 4,
      limit: limit
    },
  }
}