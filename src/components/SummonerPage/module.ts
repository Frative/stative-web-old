import { store } from 'stores'
import { setPageSummonerData } from 'stores/PageSlice'
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
