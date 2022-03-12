// region import
import React from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material'

// interfaces
import { BinanceSymbol } from 'interfaces'

// utilities
import { capitalize } from 'utilities'
// endregion

function CardBinanceSymbol(props: BinanceSymbol) {
  return (
    <Box sx={{ minWidth: 275, margin: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            {props.symbol}
          </Typography>
          <Box>
            <Typography variant="body1">
              <span>Status:</span>
              {' '}
              {capitalize(props.status)}
            </Typography>

            <Typography variant="body1">
              <span>Basse asset:</span>
              {' '}
              {props.baseAsset}
            </Typography>

            <Typography variant="body1">
              <span>Quote asset:</span>
              {' '}
              {props.quoteAsset}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained">See more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardBinanceSymbol
