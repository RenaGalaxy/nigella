import app from './app'
import log4js from 'log4js'

const logger = log4js.getLogger()

app.listen(53000, () => {
    logger.info('server started. 53000')
})
