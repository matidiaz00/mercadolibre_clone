import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import SearchIcon from "@/public/ic_Search@2x.png"
import MeLi2x from "@/public/logo__large_plus@2x.png"
import MeLiSmall2x from "@/public/Logo_ML@2x.png"

export default function HeaderComponent() {

  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = e.target.search.value;
    e.target.reset();
    router.push(`/items?search=${val}`, null, { shallow: false })
  }

  return (
    <header className="bg-secondary mb-2">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <Link href='/' className="mr-3 mr-md-4">
          <Image
            alt="Mercado Libre logo"
            src={MeLi2x}
            width={134}
            height={34}
            className="d-none d-md-block"
            priority={true}
          />
          <Image
            alt="Mercado Libre iso logo"
            src={MeLiSmall2x}
            width={51}
            height={34}
            className="d-md-none"
            priority={false}
          />
        </Link>
        <form onSubmit={handleSubmit} className="input-group" id="search-form">
          <input
            type="text"
            placeholder="Busca productos, marcas y más"
            name="search"
            required
            minLength="3"
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-light bg-white">
              <Image
                alt="Icono buscar"
                src={SearchIcon}
                width={18}
                height={18}
                priority={false}
              />
            </button>
          </div>
        </form>
      </div>
    </header>
  )
}
