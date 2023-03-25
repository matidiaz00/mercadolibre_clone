import { specificItem } from '@/services/config'
import { setSepecificItem } from '@/services/model'

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query
        const response = await specificItem(id)
        if (!response.ok) {
            res.status(response.status).send(await response.text())
        } else {
            const json = await response.json()
            const data = await setSepecificItem(json[0].body)
            res.status(200).json(data)
        }
    } else {
        res.status(403).send('Forbidden');
    }
  }