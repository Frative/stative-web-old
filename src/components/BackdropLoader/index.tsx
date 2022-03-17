// region import
import React from 'react'
import {
  CircularProgress,
  Container,
  Backdrop,
} from '@mui/material'

// interfaces
import { BackdropLoaderProps } from 'interfaces'
// endregion

function BackdropLoader(props: BackdropLoaderProps) {
  return (
    <Backdrop open={props.open}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Container>
    </Backdrop>
  )
}

export default BackdropLoader
