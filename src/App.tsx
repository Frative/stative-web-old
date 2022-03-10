import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppBar, ProvideContextData } from 'components'

function App() {
  return (
    <BrowserRouter>
      <ProvideContextData>
        <AppBar />
      </ProvideContextData>
    </BrowserRouter>
  )
}

export default App
