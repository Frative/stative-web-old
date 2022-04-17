// region import
import React from 'react'
import {
  AppBar as MUIAppBar, Box, Toolbar, Typography,
  Container,
} from '@mui/material'

// components
import { SearchSummoner, Link } from 'components'

// utilities
import { route } from 'utilities'
// endregion

function AppBar() {
  return (
    <Box>
      <Container
        sx={{
          borderLeft: 'solid 1px',
          borderRight: 'solid 1px',
          borderColor: 'divider',
          padding: 3,
        }}
      >
        <MUIAppBar
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          position="static"
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0px !important',
            }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              component="div"
            >
              <Link to={route.home.base}>
                {process.env.REACT_APP_NAME}
              </Link>
            </Typography>
            <SearchSummoner />
          </Toolbar>
        </MUIAppBar>
      </Container>
    </Box>
  )
}

export default AppBar
