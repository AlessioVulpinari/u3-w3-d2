export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"

export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON"
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADING_OFF"
export const GET_JOBS_ERROR_ON = "GET_JOBS_ERROR_ON"
export const GET_JOBS_ERROR_OFF = "GET_JOBS_ERROR_OFF"

export const BASE_ENDPOINT = "https://strive-benchmark.herokuapp.com/api/jobs?search="

export const removeFromFavourites = (company_name) => ({ type: REMOVE_FROM_FAVOURITES, payload: company_name })
export const addFromFavourites = (company_name) => ({ type: ADD_TO_FAVOURITES, payload: company_name })

export const getJobsAction = (company_name) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(BASE_ENDPOINT + company_name + "&limit=20")
      if (response.ok) {
        const data = await response.json()
        dispatch({ type: GET_JOBS, payload: data })
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
