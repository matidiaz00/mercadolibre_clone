import Link from "next/link";

export default function ItemComponent({ data }) {
  return (
    <>
      <li>
        <Link href={`items/${data.id}`}>{data.title}</Link>
      </li>
    </>
  )
}
