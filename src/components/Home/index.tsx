// region import
import React, { useContext, useEffect } from 'react'
import { Container } from '@mui/material'

// interfaces
import { BinanceExchangeInfo } from 'interfaces'

// contexts
import { Data } from 'contexts'

// components
import { CardBinanceSymbol } from 'components'

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

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {exchangeInfo && exchangeInfo.symbols.slice(0, 100).map((symbol) => (
        <CardBinanceSymbol key={symbol.symbol} {...symbol} />
      ))}
    </Container>
  )
}

export default Home
