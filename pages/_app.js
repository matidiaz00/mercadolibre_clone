import HeaderComponent from '@/components/header'
import '@/styles/globals.css'
import BreadcrumbComponent from '@/components/breadcrumbs';

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <BreadcrumbComponent />
      <Component {...pageProps} />
    </>
  )
}
