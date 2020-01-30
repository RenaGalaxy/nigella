import express from 'express'
import fs from 'fs'
import log4js from 'log4js'

import pingService from './services/pingService'

const app = express();

const logger = log4js.getLogger('express')
app.use(log4js.connectLogger(logger, { level: 'auto'}))

openapi.initialize({
    app: app,
    apiDoc: fs.readFileSync('openapi.json', 'uft-8'),
    dependencies: {
        pingService: pingService
    }
})

module.exports = app
