/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://marlonfalcon.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/dashboard', '/calendario/reserva/*'],
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/', disallow: ['/dashboard', '/calendario/reserva/'] }]
    }
    // REST CODE READ DOCS  ...
    }
