import log4js from 'log4js'
const logger = log4js.getLogger()

export default function (pingService) {
    const operations = {
        GET,
        POST
    }

    async function GET(req, res) {
        logger.debug('/ping GET:', req)
        await pingService.ping()
        res.status(200).send()
    }

    async function POST(req, res) {
        logger.debug('/ping POST', req)
        await pingService.ping()
        res.status(200).send()
    }

    GET.apiDoc = {
        'summary': 'ping',
        'description': 'ping pong',
        'responses': {
            '200': {
                'description': 'pong'
            }
        }
    }

    POST.apiDoc = {
        'summary': 'ping',
        'description': 'ping pong',
        'responses': {
            '200': {
                'description': 'pong'
            }
        }
    }

    return operations
}
