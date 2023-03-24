import Link from "next/link";
import { useRouter } from "next/navigation"

export default function HeaderComponent() {

  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = e.target.search.value;
    e.target.reset();
    router.push(`/items?search=${val}`, null, { shallow: false })
  }

  return (
    <>
      <Link href='/'>Home</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca productos, marcas y más"
          name="search"
          required
          minLength="3"
        />
        <button type="submit">Search</button>
      </form>
    </>
  )
}
