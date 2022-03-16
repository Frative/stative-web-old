import { Stage } from 'interfaces'

interface State {
  loading: boolean
}

export const initialState: State = {
  loading: true,
}

export function handleComplete(stage: Stage<State>) {
  return () => {
    stage.commitState({
      loading: false,
    })
  }
}
