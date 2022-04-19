/* eslint-disable max-len */
// region import
import React, { PropsWithChildren } from 'react'
import { Box, Container, Typography } from '@mui/material'

// components
import { AppBar } from 'components'
// endregion

function FrameLayout(props: PropsWithChildren<{}>) {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          borderTop: 'solid 1px',
          borderBottom: 'solid 1px',
          borderColor: 'divider',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderLeft: 'solid 1px',
            borderRight: 'solid 1px',
            borderColor: 'divider',
            padding: 3,
            flex: 1,
          }}
        >
          {props.children}
        </Container>
      </Box>
      <Container
        sx={{
          borderLeft: 'solid 1px',
          borderRight: 'solid 1px',
          borderColor: 'divider',
          padding: 3,
          color: 'text.secondary',
        }}
      >
        <Typography>
          Stative © Copyright 2022. All rights reserved.
        </Typography>
        <Typography>
          Stative isn&apos;t endorsed by Riot Games and doesn&apos;t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.
          League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </Typography>
      </Container>
    </>
  )
}

export default FrameLayout
