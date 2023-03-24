import Link from "next/link";

export default function ItemComponent({ data, index }) {
  return (
    <>
      <li>
        {index} <Link href={`items/${data.id}`}>{data.title}</Link>
      </li>
    </>
  )
}
