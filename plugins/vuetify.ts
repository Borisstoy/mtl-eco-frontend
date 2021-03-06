import 'vuetify/dist/vuetify.min.css'
import LRU from 'lru-cache'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const themeCache = new LRU({
    max: 10,
    maxAge: 1000 * 60 * 60 // 1 hour
})

const opts = {
    theme: {
        options: {
            themeCache
        },
        themes: {
            light: {
                primary: '#347474',
                secondary: '#35495e',
                succes: '#42b883',
                accent: '#8c9eff',
                error: '#b71c1c'
            }
        }
    }
}

export default new Vuetify(opts)
