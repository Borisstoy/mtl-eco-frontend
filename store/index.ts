const cookieparser = require('cookieparser')

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        let token = ''
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                token = JSON.stringify(parsed.accessToken)
            }
            catch (err) {
                console.log(err)
            }
        }
        commit('user/setAuth', token)
    }
}
