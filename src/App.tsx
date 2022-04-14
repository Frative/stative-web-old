/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  CircularProgress, Container, Box, Typography,
} from '@mui/material'

// components
import { AppBar, ProvideContextData } from 'components'

// stores
import { store } from 'stores'

// views
const Home = lazy(() => import('components/Home'))
// endregion

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProvideContextData>
          <AppBar />
          <Box
            sx={{
              borderTop: 'dashed 1px',
              borderBottom: 'dashed 1px',
              borderColor: 'text.disabled',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderLeft: 'dashed 1px',
                borderRight: 'dashed 1px',
                borderColor: 'text.disabled',
                padding: 3,
                flex: 1,
              }}
            >
              <Suspense fallback={<CircularProgress />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Suspense>
            </Container>
          </Box>
          <Container
            sx={{
              borderLeft: 'dashed 1px',
              borderRight: 'dashed 1px',
              borderColor: 'text.disabled',
              padding: 3,
              color: 'text.secondary',
            }}
          >
            <Typography>
              © Copyright 2022 Stative. All rights reserved.
            </Typography>
            <Typography>
              Stative isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.
              League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </Typography>
          </Container>
        </ProvideContextData>
      </BrowserRouter>
    </Provider>
  )
}

export default App
