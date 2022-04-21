import { store } from 'stores'
import { setPageSummonerData, setPageSummonerMatches } from 'stores/PageSlice'
import { ep } from 'utilities'

export async function setSummoner(name: string, region: string) {
  const url = new URL(ep.api.summoner)
  url.searchParams.append('name', name)
  url.searchParams.append('region', region)

  const request = await fetch(url.toString())
  const { summoner } = await request.json()

  if (store.getState().page.summoner.status === 'active') {
    store.dispatch(setPageSummonerData(summoner))
  }
}

export async function setSummonerMatches(puuid: string, region: string) {
  const url = new URL(ep.api.summonerMatches)
  url.searchParams.append('puuid', puuid)
  url.searchParams.append('region', region)

  const request = await fetch(url.toString())
  const { matches } = await request.json()

  if (store.getState().page.summoner.status === 'active') {
    store.dispatch(setPageSummonerMatches(matches))
  }
}
