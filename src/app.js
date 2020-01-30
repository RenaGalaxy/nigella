import express from 'express'
import fs from 'fs'
import { errorMiddleware, errorTransformer } from './middleware'
import log4js from 'log4js'

import pingService from './services/pingService'

const app = express();

const logger = log4js.getLogger('express')
app.use(log4js.connectLogger(logger, { level: 'auto'}))

openapi.initialize({
    app: app,
    apiDoc: fs.readFileSync('openapi.json', 'uft-8'),
    paths: '.src/paths',
    consumesMiddleware: {
        'application/json': express.json(),
        'text/text': express.text()
    },
    errorMiddleware: errorMiddleware,
    errorTransformer: errorTransformer,
    docsPath: '/schema',
    exposeApiDocs: true,
    promiseMode: true,
    dependencies: {
        pingService: pingService
    }
})

module.exports = app
