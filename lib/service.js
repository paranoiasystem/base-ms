import * as dotenv from 'dotenv'

class Service {
    constructor(opts) {
        this._opts = opts
        this._pluginList = new Map()
        this._isStarted = false
        dotenv.config()
    }

    addPlugin(fn, name) {
        if ((!fn || !name || this._pluginList[name]) && !this._isStarted) {
            throw new Error('Invalid Operation')
        }
        this._pluginList.set(name, fn)
    }

    async start(fn) {
        for (let [key, value] of this._pluginList) {
            this[key] = await value(this)
        }
        // clean map for GC
        this._pluginList.clear()
        this._isStarted = true
        await fn(this)
    }

    get name() {
        return this._opts.name
    }

}
export default Service