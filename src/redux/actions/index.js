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
      dispatch({ type: GET_JOBS_LOADING_ON })
      const response = await fetch(BASE_ENDPOINT + company_name + "&limit=20")
      if (response.ok) {
        const data = await response.json()
        dispatch({ type: GET_JOBS, payload: data })
        dispatch({ type: GET_JOBS_ERROR_OFF })
      } else {
        if (response.status === 400) {
          throw new Error("400: Bad Request")
        }
        if (response.status === 401) {
          throw new Error("401: Unauthorized")
        }
        if (response.status === 402) {
          throw new Error("402: Payment Required")
        }
        if (response.status === 403) {
          throw new Error("403: Forbidden")
        }
        if (response.status === 404) {
          throw new Error("404: Not Found")
        }
        if (response.status === 405) {
          throw new Error("405: Method Not Allowed")
        }
        if (response.status === 406) {
          throw new Error("406: Not Acceptable")
        }
        if (response.status === 407) {
          throw new Error("407: Proxy Authentication Required")
        }
        if (response.status === 408) {
          throw new Error("408: Request Timeout")
        }
        if (response.status === 500) {
          throw new Error("500: Server Error")
        }
        throw new Error("Generic Fetch Error")
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR_ON, payload: error.message })
    } finally {
      dispatch({ type: GET_JOBS_LOADING_OFF })
    }
  }
}
