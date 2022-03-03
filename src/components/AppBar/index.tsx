// region import
import React from 'react'
import {
  AppBar as MUIAppBar, Box, Toolbar, IconButton, Typography,
} from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {process.env.REACT_APP_NAME}
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
