// region import
import { store } from 'stores'
import { setSearchSummoners, setSearchId } from 'stores/SearchSlice'
import { ep } from 'utilities'

// constants
const throttle = require('lodash.throttle');
// endregion

export const handleSearch = throttle(async (_e: any, inputValue: string) => {
  const requestId = Math.random()
  store.dispatch(setSearchId(requestId))
  store.dispatch(setSearchSummoners([]))

  const url = new URL(ep.api.summoners)
  url.searchParams.append('name', inputValue)

  const request = await fetch(url.toString())
  const { summoners } = await request.json()

  if (store.getState().search.id === requestId) {
    store.dispatch(setSearchSummoners(summoners))
    store.dispatch(setSearchId(0))
  }
}, 600)
