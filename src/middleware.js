import log4js from 'log4js'
import request from 'request-promise'

const logger = log4js.getLogger()

export function errorMiddkeware(err, req, res) {
    logger.error('error detected at errorMiddleware:', err)
    res.status(400)
    res.json(err)
}

export function errorTransformer(openapi) {
    logger.error('error detected aat errorTransformer:', openapi)
    return openapi.message
}
