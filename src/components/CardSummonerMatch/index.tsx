// region import
import React from 'react'
import {
  Card,
  CardHeader,
  Avatar,
} from '@mui/material'

// hooks
import { usePageStore } from 'hooks'

// interfaces
import { CardSummonerMatchProps } from 'interfaces'

// components
import { CircularProgressScore } from 'components'
// endregion

function CardSummonerMatch(props: CardSummonerMatchProps) {
  const page = usePageStore()

  const date = new Date(props.match.gameCreation)
    .toString()
    .split(' ')
    .slice(1, 5)
    .join(' ')

  const { participants } = props.match
  const [participant] = participants.filter(
    (p) => p.puuid === page.summoner.data?.puuid,
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
          <CircularProgressScore
            value={participant.score}
          />
        )}
      />
    </Card>
  )
}

export default CardSummonerMatch
