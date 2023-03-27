import Head from 'next/head'
import SEO from '@/services/SEO.json'

export default function Home() {
  return (
    <main className="container text-center py-5">
      <Head>
        <title>MercadoLibre 📦</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content={SEO.description} data-head-react="true" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="og:title" property="og:title" content={SEO.title} />
        <meta name="og:description" property="og:description" content={SEO.description} />
      </Head>
      <h1>Hola mundo</h1>
    </main>
  )
}
