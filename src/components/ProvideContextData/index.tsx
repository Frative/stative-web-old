// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Data } from 'contexts'

// modules
import {
  requester, responser, initialState, loader,
} from './module'
// endregion

function ProvideContextData(props: PropsWithChildren<{}>) {
  const stage = useStage(initialState)
  const request = requester(stage)
  const response = responser(stage)

  useEffect(() => {
    const { loading } = stage.state
    if (loading) {
      loader(stage)
    }
  }, [stage.state.loading])

  useEffect(() => {
    const { queueCallbacks, loading } = stage.state
    if (queueCallbacks?.length && !loading) {
      const queueCallback = queueCallbacks[0]
      stage.commitState({
        loading: queueCallback,
      })
    }
  }, [stage.state, stage.state.loading])

  return (
    <Data.Provider value={{ request, response, loading: stage.state.loading }}>
      {props.children}
    </Data.Provider>
  )
}

export default ProvideContextData
