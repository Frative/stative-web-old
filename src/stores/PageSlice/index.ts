import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackendSummoner } from 'interfaces'

interface State {
  summoner: {
    status: 'active' | 'inactive'
    data: BackendSummoner | undefined
  }
}

const initialState: State = {
  summoner: {
    status: 'inactive',
    data: undefined,
  },
}

const PageSlice = createSlice({
  name: 'Page',
  reducers: {
    setPageSummonerStatus: (state, action: PayloadAction<'active' | 'inactive'>) => ({
      ...state,
      summoner: {
        ...state.summoner,
        status: action.payload,
      },
    }),
    setPageSummonerData: (state, action: PayloadAction<BackendSummoner | undefined>) => ({
      ...state,
      summoner: {
        ...state.summoner,
        data: action.payload,
      },
    }),
  },
  initialState,
})

export const { setPageSummonerStatus, setPageSummonerData } = PageSlice.actions

export default PageSlice.reducer
