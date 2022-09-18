import Service from "./lib/service.js"
import logger from "./plugin/logger.js"
import mongo from "./plugin/mongo.js"

const service = new Service({
    name: 'Test Service'
})

service.addPlugin(logger, 'logger')
service.addPlugin(mongo, 'mongo')

await service.start(async (service) => {
    service.logger.info(`${service.name} is stated`)
})