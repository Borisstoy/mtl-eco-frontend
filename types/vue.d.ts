import CookieUniversalNuxt from 'cookie-universal-nuxt'
import VueRouter, { Route } from 'vue-router'
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


import Vue, { ComponentOptions } from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    // This adds the `middleware` property to the existing `vue/types/options/ComponentOptions` type
    middleware?: string | string[];
  }
}
