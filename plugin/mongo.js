import {MongoClient} from "mongodb"

export default async (service) => {
    try {
        const client = new MongoClient(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        await client.connect()
        service.logger.debug('Connected to MongoDB')
        return client
    } catch (e) {
        service.logger.trace(e)
        throw e
    }
}