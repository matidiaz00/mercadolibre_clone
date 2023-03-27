import ItemComponent from '@/components/item'
import { useState, useEffect } from 'react';

export default function ListComponent ({ defaultItems, search, total, limit }) {

    const [items, setItems] = useState(defaultItems)
    const [isLoading, setLoading] = useState(false)
    const [offset, changeOffset] = useState(6);

    useEffect(() => {
        setLoading(true)
        fetch( `/api/items?search=${search}&offset=${offset}&limit=${limit}` )
        .then(res => res.json())
        .then(newItems => {
            setItems([...items, ...newItems.items])
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit, offset, search])

    return (
        <>
            { !items || items.length === 0 ? (
                <h2 className='text-center mt-5 text-light'>Lo sentimos, no hay resultados</h2>
            ) : null }

            { !items || items.length != 0 ? ( <>
                <div className='row align-items-stretch my-n3'>
                { items ? items.map(item => 
                    <div key={item.id} className="itemComponent col-6 col-lg-4 py-3">
                        <ItemComponent data={item} />
                    </div>
                ) : null}
                </div>

                <div className='my-4 d-flex flex-column justify-content-center'>
                { isLoading ? (
                    <span className='text-light text-center mb-4'>Cargando ...</span>
                ) : null}
                { offset >= total ? (
                    <span className='text-light text-center'>No hay más resultados</span>
                ) : (
                    <button
                        type='button'
                        className='btn btn-link'
                        onClick={ () => changeOffset(offset + limit)
                    }>Cargar más</button>
                )}
                </div>
            </> ) : null}
        </>
    )
}