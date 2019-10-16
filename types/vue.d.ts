import { ElLoadingComponent, LoadingServiceOptions } from 'element-ui/types/loading'
import Vue, { ComponentOptions } from 'vue'
import CookieUniversalNuxt from 'cookie-universal-nuxt'
import VueRouter from 'vue-router'
import config from '@/libs/config'

/**
 * Missing type fix
 * Reference: https://stackoverflow.com/questions/49090240/nuxt-vue-js-in-typescript-object-literal-may-only-specify-known-properties-b
 */

declare module 'vue/types/vue' {
    // eslint-disable-next-line
    interface Vue {
        $router: VueRouter
        $config: typeof config
        CookieUniversalNuxt: typeof CookieUniversalNuxt
        window: typeof window
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // THis is a conflict betweeb Element plugin and Nuxt types. No time to fix this.
    }
}

declare module 'vue/types/options' {
    interface IComponentOptions<V extends Vue> {
        // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        middleware?: string | string[] | any
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        $loading (options: any): any
    }
}
