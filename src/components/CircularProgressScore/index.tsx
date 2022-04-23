// region import
import React from 'react'
import {
  CircularProgress,
  Box,
  Typography,
} from '@mui/material'

// utilities
import { colorScore } from 'utilities'

// interfaces
import { CircularProgressScoreProps } from 'interfaces'
// endregion

function CircularProgressScore(props: CircularProgressScoreProps) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        size={props.size}
        variant="determinate"
        value={100}
        sx={{
          position: 'absolute',
          left: 0,
          color: 'divider',
        }}
      />
      <CircularProgress
        size={props.size}
        variant="determinate"
        value={props.value}
        sx={{
          color: colorScore(props.value),
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >
          {props.value}
        </Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressScore
