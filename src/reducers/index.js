import { combineReducers }
import { isLoadingReducer } from'./isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'
import { housesReducer } from './housesReducer.js'


const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  houses: housesReducer
})