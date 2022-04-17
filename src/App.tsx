/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  CircularProgress,
} from '@mui/material'

// components
import { ProvideContextData, FrameLayout } from 'components'

// stores
import { store } from 'stores'

// views
const HomePage = lazy(() => import('components/HomePage'))
const SummonerPage = lazy(() => import('components/SummonerPage'))
// endregion

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProvideContextData>
          <FrameLayout>
            <Suspense fallback={<CircularProgress />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/summoner/:region/:name" element={<SummonerPage />} />
              </Routes>
            </Suspense>
          </FrameLayout>
        </ProvideContextData>
      </BrowserRouter>
    </Provider>
  )
}

export default App
