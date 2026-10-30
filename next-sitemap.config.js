/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.marlonfalcon.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/dashboard', '/calendario/reserva/*', '/cursos/owl-odoo-20/manual'],
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/', disallow: ['/dashboard', '/calendario/reserva/'] }],
      // Las fichas de la tienda no existen en el build: su sitemap se genera en vivo
      additionalSitemaps: [`${process.env.SITE_URL || 'https://www.marlonfalcon.com'}/sitemap-tienda.xml`]
    }
    // REST CODE READ DOCS  ...
    }
