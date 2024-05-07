import { combineReducers, configureStore } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers"

const rootReducer = combineReducers({
  favourites: favoriteReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
