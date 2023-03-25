const URL_ITEMS_SEARCH = (search, offset, limit) => {
    return `${process.env.API_URL}/sites/MLA/search?q=${search}&offset=${offset}&limit=${limit}`;
}

const URL_SPECIFIC_ITEM = id => {
    return `${process.env.API_URL}/items?ids=${id}`
}

const headers = {
    metod: 'GET',
    headers: { Authentication: `Bearer ${process.env.ACCESS_TOKEN}` }
}

export const specificItem = async id => {
    const url = URL_SPECIFIC_ITEM(id)
    const response = await fetch(url, headers)
    return response
}

export const searchItems = async (search, offset, limit) => {
    const url = URL_ITEMS_SEARCH(search, offset, limit)
    const response = await fetch(url, headers)
    return response
}

export const getDescription = async id => {
    try {
        const url = `${process.env.API_URL}/items/${id}/description`
        const response = await fetch(url, headers)
        const data = await response.json()
        return data.plain_text
    } catch (e) {
        return "Error when try get a description."
    }
}