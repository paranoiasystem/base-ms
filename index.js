import Service from "./lib/service.js"
import logger from "./plugin/logger.js"
import mongo from "./plugin/mongo.js"

const service = new Service()

service.use(logger)
service.use(mongo)

await service.start(async (service) => {
    service.logger.info(`${process.env.SERVICE_NAME} is stated`)
})
