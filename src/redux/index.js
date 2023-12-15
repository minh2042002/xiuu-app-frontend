import { combineReducers, configureStore } from '@reduxjs/toolkit'
import yourWorkReducer from './your-work/reducer'
import dataReducer from './data/reducer'

const reducer = combineReducers({
  yourWork: yourWorkReducer,
  data: dataReducer
})

const store = configureStore({
  reducer
})

export default store