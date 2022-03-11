// region import
import React, { useContext, useEffect } from 'react'

// interfaces
import { BinanceExchangeInfo } from 'interfaces'

// contexts
import { Data } from 'contexts'

// utilities
import { ep } from 'utilities'
// endregion

function Home() {
  const data = useContext(Data)
  const exchangeInfo: BinanceExchangeInfo = data.response({
    method: 'get',
    endpoint: ep.binance.exchangeInfo,
  })

  useEffect(() => {
    data.request({
      method: 'get',
      endpoint: ep.binance.exchangeInfo,
    })
  }, [])

  console.log(exchangeInfo)
  return (
    <div>Hellow.</div>
  )
}

export default Home
