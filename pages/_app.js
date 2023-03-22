import HeaderComponent from '@/components/header'
import BreadcrumbsComponent from '@/components/breadcrumbs'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <BreadcrumbsComponent/>
      <Component {...pageProps} />
    </>
  )
}
