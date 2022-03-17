// region import
import React, { useContext, useEffect, useMemo } from 'react'
import { } from 'chart.js'
import { useParams } from 'react-router-dom'
import {
  Container, Card, CardContent,
  Typography,
  Box,
} from '@mui/material'

// interfaces
import { BinanceDepth } from 'interfaces'

// contexts
import { Data } from 'contexts'

// components
import { ChartCurve, BackdropLoader } from 'components'

// utilities
import { ep, binanceBidsWalls, binanceAsksWalls } from 'utilities'
// endregion

function BinanceSymbol() {
  const data = useContext(Data)
  const { symbol } = useParams()

  const params = {
    symbol,
    limit: 5000,
  }

  const depth: BinanceDepth | undefined = data.response({
    method: 'get',
    endpoint: ep.binance.depth,
    params,
  })

  const {
    sell,
    buy,
  } = useMemo(() => {
    if (depth) {
      const {
        bids,
        asks,
      } = depth

      const asksWalls = binanceAsksWalls(asks)
      const bidsWalls = binanceBidsWalls(bids)

      return {
        sell: bidsWalls,
        buy: asksWalls,
      }
    }
    return {
      buy: undefined,
      sell: undefined,
    }
  }, [depth])

  useEffect(() => {
    data.request({
      method: 'get',
      endpoint: ep.binance.depth,
      params,
    })
  }, [])

  return (
    <Container maxWidth={false}>
      <BackdropLoader open={!sell || !buy} />
      <Card variant="outlined">
        <CardContent>
          <Typography
            sx={{
              marginBottom: 1,
            }}
            variant="h6"
            component="h2"
          >
            Order book
          </Typography>
          <Box>
            {sell && buy && (
              <ChartCurve
                labels={sell.quote.concat(buy.quote)}
                data={sell.base}
                secondaryData={new Array(sell.base.length).fill(null).concat(buy.base)}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default BinanceSymbol
