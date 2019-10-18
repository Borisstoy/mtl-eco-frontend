import express from 'express'
import dotenv from 'dotenv'
import authenticate from './authenticate'
import places from './places'

dotenv.config()

/**
* Create express instnace
*/
const app = express()

/**
* Support URL-encoded bodies
*/
app.use(express.json())

/**
* Support JSON-encoded bodies
*/
app.use(express.urlencoded({ extended: true }))

/**
* Import API Routes
*/
app.use(authenticate)
app.use(places)

/**
* Export the server middleware
*/
export default {
    path: '/api',
    handler: app
}
