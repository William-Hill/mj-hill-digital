const plugins = require('./gatsby-config.plugins');

module.exports = {
  pathPrefix: '/PersonalSite', // Prefix for GitHub Pages deployment
  siteMetadata: {
    hostname: 'https://lgcolella.github.io',
    title: 'Luigi Colella',
    description: 'Logbook of a software developer',
    author: 'lcolella',
    pages: {
      home: '/',
      blog: 'blog/',
      tag: 'tag',
      about: 'about',
      archive: 'archive'
    }
  },
  plugins,
}
