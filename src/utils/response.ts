export default class Response {
    data: any
    message: any

    constructor(data = null, message = null) {
        this.data = data
        this.message = message
    }

    success(res: any) {
        return res.status(200).json({
            success: true,
            data: this.data,
            message: this.message ?? "Default success message"
        })
    }

    created(res: any) {
        return res.status(201).json({
            success: true,
            data: this.data,
            message: this.message ?? "Default created message"
        })
    }

    error500(res: any) {
        return res.status(500).json({
            success: false,
            data: this.data,
            message: this.message ?? "Default error500 message !"
        })
    }

    error400(res: any) {
        return res.status(400).json({
            success: false,
            data: this.data,
            message: this.message ?? "Default error400 message !"
        })
    }

    error401(res: any) {
        return res.status(401).json({
            success: false,
            data: this.data,
            message: this.message ?? "Default error401 message !"
        })
    }

    error404(res: any) {
        return res.status(404).json({
            success: false,
            data: this.data,
            message: this.message ?? "Default error404 message !"
        })
    }

    error429(res: any) {
        return res.status(429).json({
            success: false,
            data: this.data,
            message: this.message ?? "Default error429 message !"
        })
    }
}

module.exports = Response;