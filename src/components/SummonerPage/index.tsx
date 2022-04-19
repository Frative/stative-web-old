// region import
import React, { useEffect } from 'react'
import {
  Container,
  CircularProgress,
  Typography,
  Box,
} from '@mui/material'
import { useParams } from 'react-router-dom'

// actions
import { setPageSummonerStatus, setPageSummonerData } from 'stores/PageSlice'

// hooks
import { usePageStore, useStoreDispatch } from 'hooks'

// utilities
import { regions } from 'utilities'

// modules
import { setSummoner } from './module'
// endregion

function SummonerPage() {
  const page = usePageStore()
  const dispatch = useStoreDispatch()
  const { region, name } = useParams()

  useEffect(() => {
    dispatch(setPageSummonerStatus('active'))
    if (region && name) {
      setSummoner(name, regions[region])
    }
    return () => {
      dispatch(setPageSummonerStatus('inactive'))
      dispatch(setPageSummonerData(undefined))
    }
  }, [name, region])

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '0px !important',
      }}
    >
      {!page.summoner.data && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {page.summoner.data && (
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 3,
            }}
          >
            <img
              src={`/resources/assets/patch/img/profileicon/${page.summoner.data.profileIconId}.png`}
              alt={page.summoner.data.name}
              loading="lazy"
              style={{
                width: 75,
                height: 75,
                borderRadius: '100%',
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: 1,
              }}
            >
              {page.summoner.data?.name}
              {' • '}
              {page.summoner.data?.summonerLevel}
            </Typography>
          </Box>

          <Box>
            <Typography
              component="b"
            >
              Last matches
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default SummonerPage
