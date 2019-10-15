export default {
    mode: 'universal',

    server: {
        port: 8080
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
            charset: 'utf-8'
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        },
        {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
        }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    serverMiddleware: [
        '~/server/api/index.ts'
    ],

    /*
    ** Customize the progress-bar color
    */
    loading: {
        color: '#fff'
    },
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxt/typescript-build'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'nuxt-babel',
        'cookie-universal-nuxt'
    ],
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/]
        /*
        ** You can extend webpack config here
        */
        // extend(config, ctx) {
        //     if (ctx.dev && ctx.isClient) {
        //         config.module.rules.push({
        //         enforce: 'pre',
        //         test: /\.(js|vue)$/,
        //         loader: 'eslint-loader',
        //         exclude: /(node_modules)/,
        //         options: {
        //             fix: true
        //         }
        //         });
        //     }
        // }
    }
}
