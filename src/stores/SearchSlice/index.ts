import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackendSummoner } from 'interfaces'

interface State {
  id: number
  summoners: BackendSummoner[]
}

const initialState: State = {
  id: 0,
  summoners: [],
}

const BackendSlice = createSlice({
  name: 'Search',
  reducers: {
    setSearchSummoners: (state, action: PayloadAction<BackendSummoner[]>) => ({
      ...state,
      summoners: action.payload,
    }),
    setSearchId: (state, action: PayloadAction<number>) => ({
      ...state,
      id: action.payload,
    }),
  },
  initialState,
})

export const { setSearchSummoners, setSearchId } = BackendSlice.actions

export default BackendSlice.reducer
