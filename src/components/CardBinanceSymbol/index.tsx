// region import
import React from 'react'
import {
  Box, Card, CardActions, CardContent,
} from '@mui/material'

// interfaces
import { BinanceSymbol } from 'interfaces'
// endregion

function CardBinanceSymbol(props: BinanceSymbol) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          {props.symbol}
        </CardContent>
        <CardActions>
          actions
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardBinanceSymbol
