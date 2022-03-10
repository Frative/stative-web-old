import { BackendRequestMethodsAllowed } from 'types'

interface QueueRequestCallback {
id: string
callback: () => Promise<Response>
method: BackendRequestMethodsAllowed
endpoint: string
params?: Record<string, any>
label?: string
}

export default QueueRequestCallback
