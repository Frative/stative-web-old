import { createSlice } from '@reduxjs/toolkit'

interface State {
  responses: Record<string, any>
}

const initialState: State = {
  responses: {},
}
const BackendSlice = createSlice({
  name: 'backend',
  reducers: {
    storeResponse: (state) => state,
  },
  initialState,
})

// export const { increment } = BackendSlice.actions

export default BackendSlice.reducer
