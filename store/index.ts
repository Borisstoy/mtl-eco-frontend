const cookieparser = require('cookieparser')

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let token = ''
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                token = JSON.stringify(parsed.accessToken)
                commit('user/setAuth', token)
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}
