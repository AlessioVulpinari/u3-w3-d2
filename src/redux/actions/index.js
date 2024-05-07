export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"

export const removeFromFavourites = (company_name) => ({ type: REMOVE_FROM_FAVOURITES, payload: company_name })
export const addFromFavourites = (company_name) => ({ type: ADD_TO_FAVOURITES, payload: company_name })
