export const state = () => ({
    loading: false
})

export const getters = {
    loading: state => state.loading
}

export const mutations = {
    toggleLoading: (state, loading) => state.loading = loading
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let token = ''
        if (req.headers.cookie) {
            const parsed = this.$cookies.nodeCookie.parse(req.headers.cookie)
            // Clean token: replace single by double quotes, stringify it ready to be parsed
            if (!parsed.accessToken) {
                return
            }

            const cleaned = JSON.stringify(parsed.accessToken.replace(/'/g, '"'))

            try {
                token = JSON.parse(cleaned)
                commit('user/setAuth', token)
            }
            catch (err) {
                console.log(err)
            }

        }
    }
}
