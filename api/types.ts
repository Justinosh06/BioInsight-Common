export interface ApiError {
    status: number
    message: string
    data?: unknown
}