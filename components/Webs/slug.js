// "www.bim20.com" -> "bim20-com"; se usa para el nombre de la captura y para enlazar el comentario
function slugWeb(web) {
  return web
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/.*$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

module.exports = { slugWeb }
