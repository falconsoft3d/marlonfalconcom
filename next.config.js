const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

// add splitbee

module.exports = withNextra({
  async redirects() {
    return [
      // El enlace antiguo al PDF lleva ahora a la página del CV, que permite descargarlo
      { source: '/resume_marlon_falcon.pdf', destination: '/cv', permanent: false }
    ]
  },
  async rewrites() {
    return [{ source: '/sitemap-tienda.xml', destination: '/api/tienda/sitemap' }]
  }
})