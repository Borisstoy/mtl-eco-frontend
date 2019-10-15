const cookieparser = require('cookieparser')

export const state = () => ({
    auth: null
})

export const getters = ({
    auth: state => state.auth
})

export const mutations = {
    setAuth (state, token) {
        if (token) {
            state.auth = { accessToken: token }
            this.$cookies.set('accessToken', token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        } else {
            state.auth = null
            this.$cookies.remove('accessToken')
        }
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let token = ''
        if (req.headers.cookie) {
            console.log('IN nuxtServerInit')
            console.log(req.headers.cookie)
            const parsed = cookieparser.parse(req.headers.cookie)
            console.log('PARSED')
            console.log(parsed.accessToken)
            try {
                token = JSON.stringify(parsed.accessToken)
                console.log('token')
                console.log(token)
            }
            catch (err) {
                console.log(err)
            }
        }
        commit('setAuth', token)
    }
}
