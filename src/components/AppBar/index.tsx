import React from 'react'
import { AppBar as MUIAppBar, Box, Toolbar } from '@mui/material'

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          AppBar
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
