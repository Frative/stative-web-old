/* eslint-disable max-len */
// region import
import React from 'react'
import { Typography, Box } from '@mui/material'
// endregion

function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Typography
        textAlign="center"
      >
        Stative is a site focused on generating statistics and performance ratings for League of Legends matches.
        <br />
        Search for your summoner name in the search engine.
      </Typography>
    </Box>
  )
}

export default HomePage
