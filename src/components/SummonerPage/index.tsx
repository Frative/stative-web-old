// region import
import React, { useEffect } from 'react'
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
    <div>
      Summoner:
      {page.summoner.data?.summonerLevel}
    </div>
  )
}

export default SummonerPage
