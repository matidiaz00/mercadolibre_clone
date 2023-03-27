import ItemComponent from '@/components/item'
import UseSWR from 'swr'

const call = (search, offset, limit) => `/api/items?search=${search}&offset=${offset}&limit=${limit}`;
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ListComponent ({ search, offset, limit }) {

    const { data, error, isLoading } = UseSWR(call(search, offset, limit), fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div className='row align-items-stretch my-n3'>
            { data.items.map(item => 
                <div key={item.id} className="col-6 col-lg-4 py-3">
                    <ItemComponent data={item} />
                </div>
            )}
        </div>
    )
}