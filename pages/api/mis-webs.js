const API_URL = 'https://ticketproo.com/api/dynamic-tables/mis_webs/'

export default async function handler(req, res) {
  const token = process.env.MIS_WEBS_API_TOKEN
  if (!token) {
    return res.status(500).json({ data: [], error: 'MIS_WEBS_API_TOKEN no configurado' })
  }

  try {
    const response = await fetch(API_URL, { headers: { 'X-API-Token': token } })
    if (!response.ok) {
      return res.status(502).json({ data: [] })
    }
    const json = await response.json()
    const data = (json.data || []).map(({ id, nombre, web, descripcion }) => ({
      id,
      nombre,
      web,
      descripcion
    }))

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')
    res.status(200).json({ data })
  } catch (e) {
    res.status(502).json({ data: [] })
  }
}
