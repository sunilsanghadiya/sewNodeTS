export default class APIError extends Error {
    statusCode: any
    constructor(message?: any, statusCode?: any) {
        super(message)
        this.statusCode = statusCode || 400
    }
}

module.exports = APIError