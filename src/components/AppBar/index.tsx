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
    <Box>
      <Container
        sx={{
          borderLeft: 'dashed 1px',
          borderRight: 'dashed 1px',
          borderColor: 'text.disabled',
          padding: 3,
        }}
      >
        <MUIAppBar
          sx={{
            backgroundColor: 'secondary.main',
          }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" component="div">
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
