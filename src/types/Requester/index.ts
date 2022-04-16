import { BackendRequestMethodsAllowed } from 'types'

interface RequesterArgs {
endpoint: string
params?: Record<string, any>
updateCache?: boolean
label?: string
method: BackendRequestMethodsAllowed
queue?: boolean
}

type Requester = (args: RequesterArgs) => void

export default Requester
