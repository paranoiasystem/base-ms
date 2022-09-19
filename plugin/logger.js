import pino from 'pino'

export default async (service, opts) => {
    const logger = pino({
        name: process.env.SERVICE_NAME,
        level: process.env.LOG_LEVEL || 'info'
    })
    logger.debug('Logger is started')
    await service.decorate(logger, {name: 'logger'})
}
