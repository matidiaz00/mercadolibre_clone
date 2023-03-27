import ItemComponent from '@/components/item'
import { useState } from 'react';

export default function ItemsComponent({ defaultItems, search, total, defaultOffset, limit }) {

    const [items, addItems] = useState(defaultItems);
    const [offset, changeOffset] = useState(defaultOffset);

    const getMore = async () => {
        changeOffset(offset + default_items_lenght)
        const response = await fetch(`/api/items?search=${search}&offset=${offset}&limit=${limit}`)
        const newItems = await response.json()
        addItems([...items, ...newItems.items])
    }

    return(
        <>
            { items && items.length === 0 ? (
                <h2 className='text-center mt-5 text-light'>No hay resultados</h2>
            ) : null }

            { !items || items.length != 0 ? ( <>
                <div className='row align-items-stretch my-n3'>
                { items ? items.map(item => 
                    <div key={item.id} className="col-6 col-lg-4 py-3">
                        <ItemComponent data={item} />
                    </div>
                ) : null}
                </div>

                <div className='my-4 d-flex d-flex justify-content-center'>
                { offset >= total - defaultOffset ? (
                    <span className='text-light text-center'>No hay más resultados</span>
                ) : (
                    <button type='button' className='btn btn-link' onClick={ getMore }>Cargar más</button>
                )}
                </div>
            </> ) : null}
        </>
    )

}