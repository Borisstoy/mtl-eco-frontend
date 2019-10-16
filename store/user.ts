import jwt from '@/libs/jwt'

export const state = () => ({
    auth: null,
    userEmail: null
})

export const getters = {
    userEmail: state => state.userEmail,
    auth: state => state.auth
}

export const mutations = {
    setUser (state, auth) {
        const user = jwt.decode(auth.accessToken)
        state.userEmail = user.user_email
    },
    setAuth (state, token) {
        if (token) {
            state.auth = { accessToken: token }
            this.$cookies.set('accessToken', token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        }
        else {
            state.auth = null
            this.$cookies.remove('accessToken')
        }
    }
}

export default {
    state,
    getters,
    mutations
}
