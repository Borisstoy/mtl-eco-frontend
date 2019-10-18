export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let token = ''
        if (req.headers.cookie) {
            const parsed = this.$cookies.nodeCookie.parse(req.headers.cookie)
            try {
                token = JSON.parse(parsed.accessToken)
                commit('user/setAuth', token)
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}
