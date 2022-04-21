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
import { setPageSummonerStatus, resetPageSummoner } from 'stores/PageSlice'

// hooks
import { usePageStore, useStoreDispatch } from 'hooks'

// components
import { CardSummonerMatch } from 'components'

// utilities
import { regions } from 'utilities'

// modules
import { setSummoner, setSummonerMatches } from './module'
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
      dispatch(resetPageSummoner())
    }
  }, [name, region])

  useEffect(() => {
    if (page.summoner.data && region) {
      const { puuid } = page.summoner.data
      setSummonerMatches(puuid, regions[region])
    }
  }, [page.summoner.data])

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
              component="div"
              sx={{
                marginBottom: 2,
              }}
            >
              Last matches
            </Typography>
            {page.summoner.matches.length === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  minHeight: 300,
                }}
              >
                <CircularProgress />
              </Box>
            )}
            {page.summoner.matches.map((match) => (
              <CardSummonerMatch
                key={match.info.gameId}
                match={match}
              />
            ))}
          </Box>
        </Box>
      )}
    </Container>
  )
}

export default SummonerPage
