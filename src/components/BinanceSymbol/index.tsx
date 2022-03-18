// region import
import React, { useContext, useEffect, useMemo } from 'react'
import { } from 'chart.js'
import { useParams } from 'react-router-dom'
import {
  Container, Card, CardContent,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from '@mui/material'

// interfaces
import { BinanceDepth, BinanceExchangeInfo, BinanceSymbol as BSymbol } from 'interfaces'

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

  const exchangeInfo: BinanceExchangeInfo = data.response({
    method: 'get',
    endpoint: ep.binance.exchangeInfo,
  })

  const depth: BinanceDepth | undefined = data.response({
    method: 'get',
    endpoint: ep.binance.depth,
    params,
  })

  const [symbolExchangeInfo]: BSymbol[] = exchangeInfo.symbols.filter(
    (s) => s.symbol === symbol,
  )

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography fontWeight="bold" component="h2" variant="h4">
          {symbolExchangeInfo.baseAsset}
        </Typography>
      </Box>
      <Container
        maxWidth={false}
        style={{ paddingLeft: 0, paddingRight: 0 }}
        sx={{
          display: 'flex',
          paddingBottom: 3,
          paddingTop: 3,
        }}
      >
        <Card
          variant="elevation"
          sx={{
            backgroundColor: 'secondary.main',
            minWidth: 250,
          }}
        >
          <Box>
            <Typography
              fontWeight="bold"
              sx={{
                padding: 2,
              }}
              color="secondary.contrastText"
              align="center"
            >
              Price
            </Typography>
            <Divider />
            {buy && (
              <Typography
                sx={{
                  padding: 2,
                }}
                align="center"
                color="secondary.contrastText"
              >
                {buy.quote[0]}
                {' '}
                {symbolExchangeInfo.quoteAsset}
              </Typography>
            )}
            {!buy && (
              <Box
                sx={{
                  padding: 2,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Card>
      </Container>
      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
          >
            Order book
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
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
