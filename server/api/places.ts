import { Router } from 'express'
import axios from 'axios'
import config from '../../libs/config'

const router = Router()
const BASE_URL = config.apiBaseUrl

/**
 * Create a new placee
 */
router.post('/create-place', (req, res) => {
    const {
        name,
        description,
        auth
    } = req.body.data

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': auth
    }

    axios
        .post(`${BASE_URL}/places`, {
            name,
            description
        }, { headers })
        .then(resp => res.json(resp.data))
})

/**
 * Get all places
 */
router.post('/get-places', (req, res) => {
    axios
        .get(`${BASE_URL}/places`)
        .then(resp => res.json(resp.data))
})

export default router
