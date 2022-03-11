import { requestId } from 'utilities'
import { Stage, QueueRequestCallback } from 'interfaces'
import { Responser, BackendRequestMethodsAllowed, Requester } from 'types'

interface State {
store?: Map<string, any>
queueCallbacks?: QueueRequestCallback[]
status?: 'LOADING' | 'EMPTY'
loading?: QueueRequestCallback
}

const initialState: State = {
  store: undefined,
  queueCallbacks: [],
  status: 'EMPTY',
  loading: undefined,
}

function requestCallback(
  path: string,
  method: BackendRequestMethodsAllowed,
  params?: Record<string, any>,
) {
  return () => {
    const options: RequestInit = {}
    if (method !== 'get') {
      options.body = JSON.stringify(params)
    }
    options.method = method
    return fetch(path, options)
  }
}

async function loader(stage: Stage<State>) {
  const { loading, store } = stage.state
  if (loading) {
    const { callback, id } = loading
    const requested = await callback()
    const response: any = await requested.json()
    response.status = requested.status
    stage.commitState({
      queueCallbacks: stage.state.queueCallbacks?.slice(1),
      loading: undefined,
      store: (store || new Map<string, any>()).set(id, response),
    })
  }
}

function requester(stage: Stage<State>): Requester {
  return (args) => {
    const { state } = stage
    const {
      endpoint, params, updateCache, label, method,
    } = args

    const searchParams = new URLSearchParams(params).toString()
    const urlParams = `${endpoint}${searchParams ? `?${searchParams}` : ''}`
    const id = requestId(method, endpoint, params)
    const [inQueue] = state.queueCallbacks?.filter((queueCallback) => queueCallback.id === id) ?? []

    if (
      (updateCache || !state.store?.get(id))
      && state.queueCallbacks
      && !inQueue
      && stage.state.queueCallbacks
    ) {
      const path = `${method === 'get' ? urlParams : endpoint}`
      const callback = requestCallback(path, method, params)
      stage.state.queueCallbacks.push({
        callback,
        method,
        endpoint,
        params,
        id,
        label,
      })
      stage.commitState({})
    }
  }
}

function responser(stage: Stage<State>): Responser {
  return (args) => {
    const { endpoint, params, method } = args
    const { state } = stage

    if (!state.store) return undefined
    if (args.id) return state.store.get(args.id)
    if (!endpoint || !method) return undefined
    const id = requestId(method, endpoint, params)
    return state.store.get(id)
  }
}

export {
  loader, requester, responser, initialState,
}
