import { createSlice } from '@reduxjs/toolkit'

const YourWorkSlice = createSlice({
  name: 'yourWork',
  initialState: {
    view: {
      label: 'List',
      value: 'list'
    }
  },
  reducers: {
    resetYourWorkView: (state, action) => {
      state.view = { label: 'List', value: 'list' }
    },
    setYourWorkView: (state, action) => {
      state.view = action.payload
    }
  }
})

export const { resetYourWorkView, setYourWorkView } = YourWorkSlice.actions

export default YourWorkSlice.reducer