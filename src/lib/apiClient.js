import { env } from '../config/env.js'

/**
 * Shared HTTP client for sarees_backend.
 * Extend with auth headers, refresh-token flow, etc.
 */
export async function apiClient(path, options = {}) {
  const url = `${env.apiBaseUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    throw new Error(errorBody || `Request failed: ${response.status}`)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}
