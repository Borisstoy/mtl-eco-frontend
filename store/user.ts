import jwt from '@/libs/jwt'

export const state = () => ({
    // auth: null,
    userName: null,
    userEmail: null
})

export const getters = {
    // auth: state => state.auth,
    user: state => ({
        email: state.userEmail
    })
}

export const mutations = {
    setUser (state, auth) {
        const user = jwt.decode(auth.accessToken)
        state.userEmail = user.user_email
    }
}

export default {
    state,
    getters,
    mutations
}
