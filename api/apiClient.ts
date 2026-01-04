import type { ApiError } from "./types"

const DEFAULT_HEADERS: HeadersInit = {
    "Content-Type": "application/json",
}

const getAuthHeaders = (): HeadersInit => {
    const token = localStorage.getItem("token")
    return token ? { "Authorization": `Bearer ${token}` } : {}
}

const handleResponse = async <T>(response: Response): Promise<T> => {
    const data = await response.json()

    if (!response.ok) {
        const error: ApiError = {
            status: response.status,
            message: data?.message || "API Error",
            data,
        }

        throw error
    }

    return data as T
}

export const apiGet = async <T>(
    url: string,
    headers?: HeadersInit,
): Promise<T> => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            ...DEFAULT_HEADERS,
            ...getAuthHeaders(),
            ...headers,
        }
    })

    return handleResponse<T>(response)
}

export const apiPost = async <T, B>(
    url: string,
    body: B,
    headers?: HeadersInit,
): Promise<T> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            ...DEFAULT_HEADERS,
            ...getAuthHeaders(),
            ...headers,
        },
        body: JSON.stringify(body),
    })

    return handleResponse<T>(response)
}