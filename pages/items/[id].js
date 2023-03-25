import { shimmer, toBase64 } from '@/components/_blurDataURL'
import { specificItem } from '@/services/config'
import { setSepecificItem } from '@/services/model'
import Head from 'next/head'
import Image from 'next/image'
import ShippingIcon from "@/public/ic_shipping@2x.png"

export default function DetailPage({ data }) {
  return (
    <main className='container mt-3 mb-4'>
      <Head>
        <title>Create Next App - Detail</title>
      </Head>
      <div className='bg-white rounded border row py-md-3 m-0'>
        <div className='col-12 px-md-3 p-4 d-md-none'>
          <span className='text-light'>{ data.condition === 'new' ? 'Nuevo' : 'Usado' }</span>
          <h4 className='mb-2 mt-1'>{ data.title }</h4>
        </div>
        <div className='col-12 col-md-8 px-md-3'>
          <section className='p-4'>
            <Image
              src={data.picture}
              alt={data.title}
              placeholder="blur"
              priority={false}
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(658, 254))}`}
              width={658}
              height={254}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </section>
          <section className='border-top pt-4 m-4 d-none d-md-block'>
            <h3>Descripción</h3>
            <p style={{whiteSpace: "pre-wrap"}}>{ data.description }</p>
          </section>
        </div>
        <div className='col-12 col-md-4 px-md-3'>
          <aside className='p-4 p-md-3 border-md rounded'>
            <span className='text-light d-none d-md-block'>{ data.condition === 'new' ? 'Nuevo' : 'Usado' }</span>
            <h4 className='mb-2 mt-1 d-none d-md-block'>{ data.title }</h4>
            <div className='my-3'>
              <span className='h2 d-block mb-0'>$ { data.price.decimals }</span>
              <small className='text-primary'>Ver los medios de pago</small>
            </div>
            {data.free_shipping ? (
              <div className='d-flex align-items-start'>
                <Image
                  className='mt-1'
                  src={ShippingIcon}
                  alt={data.title}
                  width={18}
                  height={18}
                  priority={false}
                />
                <div className='ml-2'>
                  <span className='text-success d-block'>Llega gratis el lunes</span>
                  <small className='text-primary'>Ver más formas de entrega</small>
                </div>
              </div>
            ) : null}
            <strong className='my-4 d-block'>{data.sold_quantity > 0  ? 'Stock disponible' : 'No hay stock disponible'}</strong>
            <button type="button" className='btn btn-primary btn-block py-2' disabled={data.sold_quantity === 0}>Comprar ahora</button>
            <small>
              <ul className='list-unstyled text-light mt-4 mb-0'>
                <li className='my-2'><span className='text-primary'>Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</li>
                <li className='my-2'><span className='text-primary'>Mercado Puntos</span>, Sumás 174 puntos.</li>
                <li className='mt-2'>6 meses de garantía de fábrica.</li>
              </ul>
            </small>
          </aside>
          <section className='border-top pt-4 m-4 d-md-none'>
            <h3>Descripción</h3>
            <p style={{whiteSpace: "pre-wrap"}}>{ data.description }</p>
          </section>
        </div>
      </div>
    </main>
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