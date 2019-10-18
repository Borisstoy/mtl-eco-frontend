import Vue, { ComponentOptions } from 'vue'
import CookieUniversalNuxt from 'cookie-universal-nuxt'
import VueRouter from 'vue-router'
import { Middleware } from '@nuxt/types'
import config from '@/libs/config'

declare module 'vue/types/vue' {
    // eslint-disable-next-line
    interface Vue {
        $router: VueRouter
        $config: typeof config
        CookieUniversalNuxt: typeof CookieUniversalNuxt
        window: typeof window
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
        // Missing type fix
        // Reference: https://stackoverflow.com/questions/49090240/nuxt-vue-js-in-typescript-object-literal-may-only-specify-known-properties-b
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // Had to disable the following: '@typescript-eslint/interface-name-prefix': [2, 'never'],
        middleware?: Middleware | Middleware[]
    }
}
