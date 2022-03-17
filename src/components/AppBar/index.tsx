// region import
import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar as MUIAppBar, Box, Toolbar, Typography, styled,
} from '@mui/material'

// utilities
import { route } from 'utilities'
// endregion

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.background.paper};
  text-decoration: none;
`

function AppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to={route.home.base}>
              {process.env.REACT_APP_NAME}
            </StyledLink>
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
