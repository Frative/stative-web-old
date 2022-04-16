import { BackendRequestMethodsAllowed } from 'types'

export const ep = {
  binance: {
    exchangeInfo: 'https://api.binance.com/api/v3/exchangeInfo',
    depth: 'https://api.binance.com/api/v3/depth',
  },
  api: {
    summoner: `${process.env.REACT_APP_API_URL}/summoner`,
  },
}

export const route = {
  home: {
    base: '/',
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

export function binanceBidsWalls(bids: [string, string][]) {
  const bidsReversed = bids.slice().reverse()

  return bidsReversed.map((bid, index) => (
    [bid[0], bidsReversed.slice(index).reduce((accum, dr) => accum + parseInt(dr[1], 10), 0)]
  )).filter((bid, index, arr) => bid[1] !== arr[index + 1]?.[1])
    .reduce((previousValue, currentValue) => {
      previousValue.base.push(currentValue[1] as never)
      previousValue.quote.push(currentValue[0] as never)
      return previousValue
    }, { base: [], quote: [] })
}

export function binanceAsksWalls(asks: [string, string][]) {
  return asks.map((ask, i) => (
    [ask[0], asks.slice(0, i).reduce((accum, a) => accum + parseInt(a[1], 10), 0)]
  )).filter((ask, index, arr) => ask[1] !== arr[index + 1]?.[1])
    .reduce((previousValue, currentValue) => {
      previousValue.base.push(currentValue[1] as never)
      previousValue.quote.push(currentValue[0] as never)
      return previousValue
    }, { base: [], quote: [] })
}
