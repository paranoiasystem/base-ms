import {MongoClient} from "mongodb"

export default async (service, opts) => {
    // console.log(service)
    try {
        const client = new MongoClient(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        await client.connect()
        service.logger.debug('Connected to MongoDB')
        await service.decorate(client, {name: 'mongo'})
    } catch (e) {
        throw e
    }
}