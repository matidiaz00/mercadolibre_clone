import { specificItem } from '@/services/config'
import { setSepecificItem } from '@/services/model'
import Head from 'next/head'

export default function DetailPage({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App - Detail</title>
      </Head>
      <h1>Detail page: {data.title}</h1>
      <p style={{whiteSpace: "pre-wrap"}}>{data.description}</p>
    </>
  )
}

export async function getServerSideProps({ params }) {
  
  const response = await specificItem(params.id)
  const json = await response.json()
  const { item } = await setSepecificItem(json[0].body)

  return {
    props: {
      data: item
    },
  }
}