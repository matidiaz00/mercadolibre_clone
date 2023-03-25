import Image from "next/image";
import Link from "next/link";
import ShippingIcon from "@/public/ic_shipping@2x.png"
import { shimmer, toBase64 } from "./_blurDataURL";

export default function ItemComponent({ data }) {
  return (
    <Link
      href={`items/${data.id}`}
      className="item-card bg-white d-block rounded-lg border overflow-hidden h-100 text-black text-decoration-none d-flex flex-column"
    >
      <div className="w-100 position-relative">
        <Image
          src={data.picture}
          alt={data.title}
          placeholder="blur"
          priority={false}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(254, 254))}`}
          width={254}
          height={254}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="border-top p-3 d-flex flex-column justify-content-start h-100">
        <small className="d-block text-body mb-2">{data.title}</small>
        <span className="h4 d-block text-body">${data.price.decimals}</span>
        <footer className="d-flex justify-content-between align-items-end mt-auto pt-3">
          <small className="text-light">{ data.condition === 'new' ? 'Nuevo' : 'Usado' }</small>
          <Image
            className={data.free_shipping ? null : 'mutted-img'}
            src={ShippingIcon}
            alt={data.title}
            width={18}
            height={18}
            priority={false}
          />
        </footer>
      </div>
    </Link>
  )
}
