import { getDescription } from "./config"

const setCategories = data => {
    const categories = []
    data.map(item => {
        if (item.category_id) categories.push(item.category_id)
    })
    return categories
}

const setItems = async data => {
    const items = []
    const newItems = data.map(item => {
        let detail = {}
        if (item.id && item.title) {
            detail["id"] = item.id
            detail["title"] = item.title
            detail.price = {
                currency: item.currency_id ? item.currency_id : null,
                amount: item.price ? item.price : null,
                decimals: item.price ? item.price.toLocaleString("es-ES") : null
            }
            detail["picture"] = item.thumbnail ? item.thumbnail.replace('-I.jpg', '-W.webp') : null
            detail["condition"] = item.condition ? item.condition : null
            detail["free_shipping"] = item.shipping ? item.shipping.free_shipping : null
        }
        items.push(detail)
    })
    await Promise.all(newItems)
    return items
}

const setDetail = async data => {
    let detail = {}
    if (data.id && data.title) {
        detail["id"] = data.id
        detail["title"] = data.title
        detail.price = {
            currency: data.currency_id ? data.currency_id : null,
            amount: data.price ? data.price : null,
            decimals: data.price ? data.price.toLocaleString("es-ES") : null
        }
        detail["picture"] = data.pictures ? data.pictures[0].url : null
        detail["condition"] = data.condition ? data.condition : null
        detail["free_shipping"] = data.shipping ? data.shipping.free_shipping : null
        detail["sold_quantity"] = data.sold_quantity ? data.sold_quantity : null
        detail["description"] = await getDescription(data.id)
    }
    return detail
}

export const setArrItems = async data => {
    return {
        author: { name: 'Matias', lastname: 'Diaz' },
        categories: setCategories(data),
        items: await setItems(data)
    }
}

export const setSepecificItem = async data => {
    const detail = await setDetail(data)
    return {
        author: { name: 'Matias', lastname: 'Diaz' },
        item: detail
    }
}