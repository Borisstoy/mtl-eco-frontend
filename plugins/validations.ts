/**
 * Expose form validations rules globally, to be used
 * on Vuetify input components
 */

import Vue from 'vue'

/**
 * Wrap plugin with app object to access i18n instance
 */
export default ({ app }) => {
    Vue.prototype.$validations = {
        /**
         * Check if input is empty
         */
        empty: [
            (v: {}) => {
                return (
                    v === 0 ||
                    v === false ||
                    !!v ||
                    app.i18n.t('forms.errors.required')
                )
            }
        ],
        /**
         * Check if email is valid
         */
        email: email => {
            const re = /\S+@\S+\.\S+/
            const test = re.test(String(email).toLowerCase())
            return [test === false ? app.i18n.t('forms.errors.required') : true]
        },
        /**
         * Check number of minimum character authorized
         */
        min_characters: [
            (v: string) =>
                (v && v.length > 25) || app.i18n.t('forms.errors.required')
        ]
    }
}
