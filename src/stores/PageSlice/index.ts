import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackendSummoner, BackendSummonerMatch } from 'interfaces'

interface State {
  summoner: {
    status: 'active' | 'inactive'
    data: BackendSummoner | undefined
    matches: BackendSummonerMatch[]
  }
}

const initialState: State = {
  summoner: {
    status: 'inactive',
    data: undefined,
    matches: [],
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
    setPageSummonerMatches: (state, action: PayloadAction<BackendSummonerMatch[]>) => ({
      ...state,
      summoner: {
        ...state.summoner,
        matches: action.payload,
      },
    }),
    resetPageSummoner: (state) => ({
      ...state,
      summoner: {
        status: 'inactive',
        data: undefined,
        matches: [],
      },
    }),
  },
  initialState,
})

export const {
  setPageSummonerStatus, setPageSummonerData, setPageSummonerMatches, resetPageSummoner,
} = PageSlice.actions

export default PageSlice.reducer
