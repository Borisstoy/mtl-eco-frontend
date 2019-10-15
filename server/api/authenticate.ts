import axios from 'axios'
import { Router } from 'express'
import config from '../../libs/config'

const router = Router()
const BASE_URL = config.apiBaseUrl

/**
 * Authenticate user
 * Receive an auth token to be stored in cookies & Vuex
 */
router.post('/authenticate', (req, res) => {
    const {
        email,
        password
    } = req.body.data

    axios
        .post(`${BASE_URL}/authenticate`, {
            email,
            password
        })
        .then(resp => res.json(resp.data))
})
export default router
