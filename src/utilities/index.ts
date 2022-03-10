import { BackendRequestMethodsAllowed } from 'types'

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
