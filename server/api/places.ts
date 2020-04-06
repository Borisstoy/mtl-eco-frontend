import { Router } from 'express'
import axios from 'axios'
import config from '../../libs/config'

const router = Router()
const BASE_URL = config.apiBaseUrl

/**
 * Create a new place
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

/**
 * Search places
 */
 router.post('/search-places', (req, res) => {
    const searchTerms = req.body.query.terms
    const searchAttribute = req.body.query.attribute

    const data = {
        [searchAttribute]: searchTerms
    }

    axios
        .get(`${BASE_URL}/places/search`, {
            data
        })
        .then(resp => res.json(resp.data))
})

export default router
