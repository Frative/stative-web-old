// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// interfaces
import { BinanceExchangeInfo } from 'interfaces'

// components
import { BackdropLoader } from 'components'

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
      <BackdropLoader open={!exchangeInfo} />
      {exchangeInfo && props.children}
    </>
  )
}

export default AppStart
