'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function BreadcrumbsComponent() {

  //const segments = useSelectedLayoutSegments();

  const breadcrumbs = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Search',
      href: '/items'
    },
    {
      text: 'Detail',
      href: '/items/123'
    }
  ]

  return (
    <>
      {breadcrumbs.map((data) => (
        <Link key={data.href} href={data.href}>
          {data.text}
        </Link>
      ))}
    </>
  );
}