import { combineReducers } from 'redux'
import { isLoadingReducer } from'./isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'
import { housesReducer } from './housesReducer.js'


export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  houses: housesReducer
})