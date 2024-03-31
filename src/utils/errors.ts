export default class APIError extends Error {
    statusCode: any
    constructor(message?, statusCode?) {
        super(message)
        this.statusCode = statusCode || 400
    }
}

module.exports = APIError