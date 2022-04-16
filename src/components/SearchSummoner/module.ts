// region import
import { store } from 'stores'
import { setSearchSummoners } from 'stores/SearchSlice'
import { ep } from 'utilities'

// constants
const throttle = require('lodash.throttle');
// endregion

export const handleSearch = throttle(async (_e: any, inputValue: string) => {
  const url = new URL(ep.api.summoner)
  url.searchParams.append('name', inputValue)

  const request = await fetch(url.toString(), {
    credentials: 'include',
  })
  const { summoners } = await request.json()
  store.dispatch(setSearchSummoners(summoners))
}, 500)
