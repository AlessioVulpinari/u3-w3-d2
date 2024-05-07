import { GET_JOBS, GET_JOBS_ERROR_OFF, GET_JOBS_ERROR_ON, GET_JOBS_LOADING_OFF, GET_JOBS_LOADING_ON } from "../actions"

const initialState = {
  content: [],
  isLoading: true,
  hasError: false,
  errorMsg: "",
}

const fetchJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      }

    case GET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      }

    case GET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      }

    case GET_JOBS_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMsg: action.payload,
      }

    case GET_JOBS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMsg: "",
      }

    default:
      return state
  }
}

export default fetchJobReducer
