import Head from 'next/head'
import AsideComponent from '@/components/aside'
import ListComponent from '@/components/list'

export default function ItemsPage({ search }) {

  return (
    <main className='container mt-3'>
      <Head>
        <title>Create Next App - Items</title>
      </Head>
      <div className='row'>
        <AsideComponent
          search={search}
          total={2000}
          className='col-12 col-md-3'
        />
        <section className='col-12 col-md-9'>
          <ListComponent 
            search={search}
            offset={0}
            limit={6}
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
}