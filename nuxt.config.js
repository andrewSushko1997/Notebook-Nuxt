require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'todo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Simple ToDo application with nuxt.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~/plugins/vuetify.js'],
  css: ['~assets/app.styl'],
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dotenv'
  ],
  axios: {
    baseURL: 'http://localhost:3000/',
    proxy: true
  },
  proxy: {
    '/api/':
      {
        target: `http://${process.env.API_HOST}:${process.env.API_PORT}`,
        pathRewrite: {
          '^/api' : ''
        }
      }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify', 'axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      /*if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
