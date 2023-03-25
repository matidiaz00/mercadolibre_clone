import Head from 'next/head'
import ItemComponent from '@/components/item'
import AsideComponent from '@/components/aside'
import { searchItems } from '@/services/config'
import { setArrItems } from '@/services/model'
import { useState } from 'react';

const default_items_lenght = 6;

export default function ItemsPage({ defaultItems, search, total, defaultOffset, limit }) {

  const [items, addItems] = useState(defaultItems);
  const [offset, changeOffset] = useState(defaultOffset);

  const getMore = async () => {
    changeOffset(offset + default_items_lenght)
    const response = await fetch(`/api/items?search=${search}&offset=${offset}&limit=${limit}`)
    const newItems = await response.json()
    addItems([...items, ...newItems.items])
  }

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

          { items.length === 0 ? (
            <h2 className='text-center mt-5 text-light'>No hay resultados</h2>
          ) : null }

          { items.length != 0 ? ( <>
            <div className='row align-items-stretch my-n3'>
              { items.map(item => 
                <div key={item.id} className="col-6 col-lg-4 py-3">
                  <ItemComponent data={item} />
                </div>
              )}
            </div>

            <div className='my-4 d-flex d-flex justify-content-center'>
              { offset >= total - defaultOffset ? (
                <span className='text-light text-center'>No hay más resultados</span>
              ) : (
                <button type='button' className='btn btn-link' onClick={ getMore }>Cargar más</button>
              )}
            </div>
          </> ) : null}

        </section>
      </div>
    </main>
  )
}

export async function getServerSideProps({ query }) {
  const { search } = query
  const offset = 0
  const limit = default_items_lenght

  const response = await searchItems(search, offset, limit)
  const { results, paging } = await response.json()
  const { items } = await setArrItems(results);

  return {
    props: {
      defaultItems: items,
      search: query.search,
      total: paging.total,
      defaultOffset: offset + default_items_lenght,
      limit: limit
    },
  }
}