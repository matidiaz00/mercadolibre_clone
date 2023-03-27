import { Html, Head, Main, NextScript } from 'next/document'
import SEO from '@/services/SEO.json'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link href={SEO.img} rel="icon" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="cache-control" content="no-cache, must-revalidate, post-check=0, pre-check=0" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="HandheldFriendly" content="True"/>
        <meta httpEquiv="cleartype" content="on"/>
        <meta name="browser-support" content="samesite=true"/>

        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#fff159" />
        <meta name="msapplication-TileImage" content={SEO.img} />
        <meta name="theme-color" content="#fff159" />

        <meta name="robots" content="noindex"/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@mercadolibre"/>
        <meta name="twitter:image" content={SEO.img}/>
        <meta name="twitter:url" content={SEO.url}/>

        <meta name="og:image" property="og:image" content={SEO.img}/>
        <meta name="og:url" property="og:url" content={SEO.url}/>
        <meta name="og:site_name" property="og:site_name" content={SEO.name}/>
        <meta name="og:type" property="og:type" content="website"/>
        <meta name="fb:app_id" property="fb:app_id" content="1650902118480141"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
