// region import
import { useMemo } from 'react'

// hooks
import { usePageStore } from 'hooks'
// endregion

function useAverageMatchScore() {
  const page = usePageStore()
  return useMemo(() => {
    const puuid = page.summoner.data?.puuid
    if (puuid === undefined) {
      return 0
    }
    const scores = page.summoner.matches.map((m) => {
      const [participant] = m.participants.filter((p) => p.puuid === puuid)
      return participant.score
    })
    return scores.reduce((a, b) => a + b, 0) / scores.length
  }, [page.summoner.matches])
}

export default useAverageMatchScore
