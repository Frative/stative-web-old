import { BackendRequestMethodsAllowed } from 'types'

export const ep = {
  binance: {
    exchangeInfo: 'https://api.binance.com/api/v3/exchangeInfo',
  },
}

export function requestId(
  method: BackendRequestMethodsAllowed,
  endpoint: string,
  params?: Record<string, any>,
) {
  const searchParams = new URLSearchParams(params).toString()
  const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
  const id = `${method}:${urlParams}`
  return id
}

export function capitalize(text: string) {
  return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
}
