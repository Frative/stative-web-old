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
