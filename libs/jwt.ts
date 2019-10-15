/**
 * Lib for decoding JWTs
 */

export default {
    /**
     * Decode the JWT
     * @param rawToken
     */
    decode (rawToken: string) {
        const base64Url = rawToken.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')

        return JSON.parse(window.atob(base64))
    }
}
