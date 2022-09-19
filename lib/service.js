import * as dotenv from 'dotenv'
import avvio from "avvio"

class Service {
    constructor() {
        this._app = avvio(this, { autostart: false })
        this._isStarted = false
        dotenv.config()
    }

    async decorate(fn, opts) {
        if ((!fn || !opts.name || this[opts.name]) && !this._isStarted) {
            throw new Error('Invalid Operation')
        }
        this[opts.name] = fn
    }

    async start(fn) {
        await this._app.ready()
        this._app.start()
        this._isStarted = true
        await fn(this)
    }
}
export default Service