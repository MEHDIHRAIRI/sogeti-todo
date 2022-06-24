export default class BaseError extends Error {
    status

    error

    constructor(status: number, error: string, message?: string) {
        super(message)

        this.status = status

        this.error = error

        Error.captureStackTrace(this, this.constructor)
    }

    toJson() {
        return {
            error: this.error,
            message: this.message,
        }
    }
}
