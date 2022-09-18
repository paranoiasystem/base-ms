import pino from 'pino'

export default (service) => {
    const logger = pino({
        name: service._opts.name,
        level: process.env.LOG_LEVEL || 'info'
    })
    logger.debug('Logger is started')
    return logger
}
