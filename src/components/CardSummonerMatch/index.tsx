// region import
import React from 'react'
import {
  Card,
  CardHeader,
  Avatar,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material'

// hooks
import { usePageStore } from 'hooks'

// utilities
import { colorScore } from 'utilities'

// interfaces
import { CardSummonerMatchProps } from 'interfaces'
// endregion

function CardSummonerMatch(props: CardSummonerMatchProps) {
  const page = usePageStore()

  const date = new Date(props.match.info.gameCreation)
    .toString()
    .split(' ')
    .slice(1, 5)
    .join(' ')

  const { participants } = props.match.info
  const [participant] = participants.filter(
    (p) => p.puuid === page.summoner.data?.puuid,
  )

  const totalDamageDealtToChampionsRank = participants.map(
    (p) => p.totalDamageDealtToChampions,
  ).sort((a, b) => a - b).indexOf(participant.totalDamageDealtToChampions)

  const totalMinionsKilledRank = participants.map(
    (p) => p.totalMinionsKilled,
  ).sort((a, b) => a - b).indexOf(participant.totalMinionsKilled)

  const damageDealtToTurretsRank = participants.map(
    (p) => p.damageDealtToTurrets,
  ).sort((a, b) => a - b).indexOf(participant.damageDealtToTurrets)

  const visionScoreRank = participants.map(
    (p) => p.visionScore,
  ).sort((a, b) => a - b).indexOf(participant.visionScore)

  const killsRank = participants.map(
    (p) => p.kills,
  ).sort((a, b) => a - b).indexOf(participant.kills)

  const deathsRank = participants.map(
    (p) => p.deaths,
  ).sort((a, b) => a - b).indexOf(participant.deaths)

  const score = Math.floor(
    (totalDamageDealtToChampionsRank * 4.4)
    + (damageDealtToTurretsRank * 3.3)
    + (totalMinionsKilledRank * 2.2)
    + (killsRank * 1.1)
    + (visionScoreRank * 0.5)
    - deathsRank,
  )

  return (
    <Card
      sx={{
        border: 'none',
        boxShadow: 'none',
        borderLeft: 'solid 2px',
        borderColor: participant.win ? 'success.light' : 'error.main',
        borderRadius: 0,
      }}
    >
      <CardHeader
        avatar={(
          <Avatar src={`/resources/assets/patch/img/champion/${participant.championName}.png`} aria-label="champion" />
        )}
        title={participant.championName}
        subheader={date}
        action={(
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant="determinate"
              value={100}
              sx={{
                position: 'absolute',
                left: 0,
                color: 'divider',
              }}
            />
            <CircularProgress
              variant="determinate"
              value={score}
              sx={{
                color: colorScore(score),
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.secondary"
              >
                {score}
              </Typography>
            </Box>
          </Box>
        )}
      />
    </Card>
  )
}

export default CardSummonerMatch
