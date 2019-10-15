import CookieUniversalNuxt from 'cookie-universal-nuxt'
import VueRouter, { Route } from 'vue-router'
import config from '@/libs/config'
import { ElLoadingComponent, LoadingServiceOptions } from 'element-ui/types/loading'

declare module 'vue/types/vue' {
    // eslint-disable-next-line
    interface Vue {
        $router: VueRouter
        $config: typeof config
        CookieUniversalNuxt: typeof CookieUniversalNuxt
        window: typeof window
        $loading (options: LoadingServiceOptions): ElLoadingComponent
    }
}

/**
 * Missing type fix
 * Reference: https://stackoverflow.com/questions/49090240/nuxt-vue-js-in-typescript-object-literal-may-only-specify-known-properties-b
 */
import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
    middleware?: string | string[];
  }
}
