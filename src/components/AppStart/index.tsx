// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'
import { CircularProgress, Container } from '@mui/material'

// interfaces
import { BinanceExchangeInfo } from 'interfaces'

// contexts
import { Data } from 'contexts'

// utiltiies
import { ep } from 'utilities'
// endregion

function AppStart(props: PropsWithChildren<{}>) {
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
    <>
      {!exchangeInfo && (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          <CircularProgress />
        </Container>
      )}
      {exchangeInfo && props.children}
    </>
  )
}

export default AppStart
