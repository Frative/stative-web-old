import { createContext } from 'react'
import { ContextData } from 'interfaces'

// modules
import { requester, responser } from 'components/ProvideContextData/module'

const state = {}
const commitState = () => {}
const stage = { state, commitState }

const Data = createContext<ContextData>({
  request: requester(stage),
  response: responser(stage),
})

export default Data
