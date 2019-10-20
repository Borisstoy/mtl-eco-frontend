export default {
    mode: 'universal',

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
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Overpass:300,400,700,900&display=swap'
            }
        ]
    },

    /**
     * Register server routes
     */
    serverMiddleware: [
        { path: '/api', handler: '~/server/api/index.ts' }
    ],

    /*
    ** Customize the progress-bar color
    */
    loading: {
        color: '#fff'
    },

    /**
     * Specify build output directory name
     */
    buildDir: 'nuxt-build',

    /*
    ** Global CSS
    */
    css: [
        '@/assets/app.sass'
    ],

    styleResources: {
        sass: [
            'assets/app.sass'
        ]
    },

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/vuetify'
    ],

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
        ['@nuxt/typescript-build', {
            typeCheck: true,
            ignoreNotFoundWarnings: true
        }]
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'nuxt-babel',
        'cookie-universal-nuxt',
        '@nuxtjs/style-resources'
    ],

    /*
    ** Build configuration
    */
    build: {
        transpile: ['vuetify/lib']
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
