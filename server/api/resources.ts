import { Router } from 'express'
import axios from 'axios'
import config from '../../libs/config'

const router = Router()
const BASE_URL = config.apiBaseUrl

/**
 * Get all places
 */
router.post('/get-places-kinds', (req, res) => {
    axios
        .get(`${BASE_URL}/places_kinds`)
        .then(resp => res.json(resp.data))
})


export default router
