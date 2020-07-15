export default {
  srcDir: 'app/',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | 宮川司法書士事務所',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700|Noto+Serif+JP:400,500,700&display=swap&subset=japanese',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['ress', '@/assets/css/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/svg4everybody.js', ssr: false },
    { src: '~plugins/object-fit-images.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/stylelint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/svg-sprite'],

  styleResources: {
    scss: '@/assets/css/abstract/all.scss',
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['gsap'],

    postcss: {
      plugins: {
        'postcss-custom-media': {
          importFrom: {
            customMedia: {
              '--sp': 'screen and (max-width: 768px)',
            },
          },
        },
        'postcss-object-fit-images': {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
