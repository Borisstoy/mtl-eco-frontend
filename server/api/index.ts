import dotenv from 'dotenv'
import express from 'express'
import authenticate from './authenticate'

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

/**
* Export the server middleware
*/
export default {
    path: '/api',
    handler: app
}
