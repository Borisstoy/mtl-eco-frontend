export const state = () => ({
    // auth: null,
    userName: null,
    userEmail: null
})

export const getters = {
    // auth: state => state.auth,
    user: state => ({
        name: state.userName,
        email: state.userEmail
    })
}

export const mutations = {
    setUser (state, decodedJwt) {
        state.userEmail = decodedJwt.email
    }
    // setAuth (state, payload) {
    //     if (payload) {
    //         const accessToken = payload.data.auth_token
    //         state.auth = {
    //             accessToken
    //         }
    //         this.$cookies.set('accessToken', accessToken, {
    //             path: '/',
    //             maxAge: 60 * 60 * 24 * 7
    //         })
    //     } else {
    //         state.auth = null
    //     }
    // }
}

export const actions = {
    // nuxtServerInit ({ commit }, { req }) {
    //     let accessToken = null
    //     if (req.headers.cookie) {
    //         const parsed = this.$cookies.get(req.headers.cookie)
    //         try {
    //             accessToken = JSON.parse(parsed.auth_token)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     commit('setAuth', accessToken)
    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}
