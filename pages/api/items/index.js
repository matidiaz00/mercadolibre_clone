import { searchItems } from '@/services/config'
import { setArrItems } from '@/services/model'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { search, offset, limit } = req.query
    const response = await searchItems(search, offset, limit)
    if (!response.ok) {
      res.status(response.status).send(await response.text())
    } else {
      const { results } = await response.json()
      const data = await setArrItems(results);
      res.status(200).json(data)
    }
  } else {
    res.status(403).send('Forbidden');
  }
}