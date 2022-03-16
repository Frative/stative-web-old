import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { AppBar, ProvideContextData, AppStart } from 'components'

// views
const Home = lazy(() => import('components/Home'))
const BinanceSymbol = lazy(() => import('components/BinanceSymbol'))
// endregion

function App() {
  return (
    <BrowserRouter>
      <ProvideContextData>
        <AppBar />
        <AppStart>
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/binance/symbol">
                <Route path=":symbol" element={<BinanceSymbol />} />
              </Route>
            </Routes>
          </Suspense>
        </AppStart>
      </ProvideContextData>
    </BrowserRouter>
  )
}

export default App
