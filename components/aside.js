export default function AsideComponent({ search, total}) {

  return (
    <>
      <aside className='col-12 col-md-3'>
        <h2 className='text-capitalize mb-0'>{ search }</h2>
        <small className='text-light d-block mb-4'>{ total } resultados</small>
        <h6 className='font-weight-bold d-none d-md-block'>Categorias</h6>
        <ul className='list-unstyled d-none d-md-block'>
          <li>Alpargatas</li>
          <li>Botas y Botinetas</li>
          <li>Chatitas</li>
          <li>Cubre Zapatos</li>
          <li>Kits de Mocasines y Oxfords</li>
          <li>Mocasines y Oxfords</li>
          <li>Otros</li>
          <li>Pantuflas</li>
          <li>Sandalias y Ojotas</li>
          <li>Stilletos y Plataformas</li>
          <li>Zapatillas</li>
        </ul>
      </aside>
    </>
  );
};