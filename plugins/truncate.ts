/**
 * Filters lib, to be used in vue instances
 * For filters to be used in context or in store, use inject or combine:
 * https://nuxtjs.org/guide/plugins/#inject-in-root-amp-context
 */

import Vue from 'vue'
import _truncate from 'lodash.truncate'

/**
 * Allow text truncate, works all all browsers (until line-clamp css is compatible with Firefox)
 * Available only on Vue instances
 */
Vue.filter('ellipsis', (text: string, length: number) => {
    return _truncate(text, { length })
})
