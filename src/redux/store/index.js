import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers/favouritesReducer"
import fetchJobReducer from "../reducers/fetchJobsReducer"

const rootReducer = combineReducers({
  favourites: favoriteReducer,
  jobs: fetchJobReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
