import HeaderComponent from '@/components/header'
import '@/styles/globals.scss'
import BreadcrumbComponent from '@/components/breadcrumbs';
import { Figtree } from 'next/font/google'

const figtree = Figtree({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  figtree
  return (
    <div className={figtree.className}>
      <HeaderComponent />
      <BreadcrumbComponent />
      <Component {...pageProps} />
    </div>
  )
}
