import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { AppBar, ProvideContextData } from 'components'

// views
const Home = lazy(() => import('components/Home'))

function App() {
  return (
    <BrowserRouter>
      <ProvideContextData>
        <AppBar />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </ProvideContextData>
    </BrowserRouter>
  )
}

export default App
