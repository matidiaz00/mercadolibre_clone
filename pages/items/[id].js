import Head from 'next/head'

const token = 'cFsnWQrDIvHRjhbmHGUpG6rByQ3tpNX8'
const app_id = '5717639391509051'
const api_url = (id) => `https://api.mercadolibre.com/items?ids=${id}`

const headers = {
  metod: 'GET',
  headers: { Authentication: `Bearer ${token}` }
}

export default function DetailPage({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App - Detail</title>
      </Head>
      <h1>Detail page: { data.code == 200 ? data.body.title : data.code }</h1>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(api_url(params.id), headers)
  const data = await res.json()
  return {
    props: {
      data: data[0]
    },
  }
}