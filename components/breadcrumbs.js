import { useRouter } from "next/router";

export default function BreadcrumbComponent() {

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      { path === '/' ? null : (
        <nav className="container text-light">
          <small>Home</small>
          { path.includes('items') ? (
            <>
              <span> &gt; </span>
              <small>Search</small>
            </>
          ) : null}
          { path.split('/').length === 3 ? (
            <>
              <span> &gt; </span>
              <small>Product</small>
            </>
          ) : null}
        </nav>
      )}
    </>
  );
};