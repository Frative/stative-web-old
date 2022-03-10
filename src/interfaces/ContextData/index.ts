import { QueueRequestCallback } from 'interfaces'
import { Responser, Requester } from 'types'

interface ContextData {
response: Responser
request: Requester
loading?: QueueRequestCallback
}

export default ContextData
