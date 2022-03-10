// region import
import React from 'react'
import {
  AppBar as MUIAppBar, Box, Toolbar, Typography,
} from '@mui/material'

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {process.env.REACT_APP_NAME}
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
