// region import
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Divider,
  styled,
} from '@mui/material'

// interfaces
import { BinanceSymbol } from 'interfaces'

// utilities
import { capitalize } from 'utilities'
// endregion

const StyledLink = styled(Link)`
  text-decoration: none;
`

function CardBinanceSymbol(props: BinanceSymbol) {
  return (
    <Box sx={{ minWidth: 275, margin: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Box>
            <Typography variant="h6" component="div">
              {props.baseAsset}
              -
              {props.quoteAsset}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
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
        <Divider />
        <CardActions sx={{ padding: 2 }}>
          <StyledLink to={`/binance/symbol/${props.symbol}`}>
            <Button
              sx={{
                backgroundColor: 'secondary.main',
              }}
              variant="contained"
            >
              See more
            </Button>
          </StyledLink>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardBinanceSymbol
