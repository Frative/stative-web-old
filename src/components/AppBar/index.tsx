// region import
import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar as MUIAppBar, Box, Toolbar, Typography, styled,
  Container,
} from '@mui/material'

// utilities
import { route } from 'utilities'
// endregion

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.secondary.contrastText};
  text-decoration: none;
`

function AppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderLeft: 'dashed 1px',
        borderRight: 'dashed 1px',
        borderColor: 'text.disabled',
      }}
    >
      <Container
        sx={{
          height: 150,
          borderLeft: 'dashed 1px',
          borderRight: 'dashed 1px',
          borderColor: 'text.disabled',
        }}
      >
        <MUIAppBar
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledLink to={route.home.base}>
                {process.env.REACT_APP_NAME}
              </StyledLink>
            </Typography>
          </Toolbar>
        </MUIAppBar>
      </Container>
    </Box>
  )
}

export default AppBar
