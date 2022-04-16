import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BackendSummoner } from 'interfaces'

interface State {
  summoners: BackendSummoner[]
}

const initialState: State = {
  summoners: [],
}

const BackendSlice = createSlice({
  name: 'Search',
  reducers: {
    setSearchSummoners: (state, action: PayloadAction<BackendSummoner[]>) => ({
      ...state,
      summoners: action.payload,
    }),
  },
  initialState,
})

export const { setSearchSummoners } = BackendSlice.actions

export default BackendSlice.reducer
