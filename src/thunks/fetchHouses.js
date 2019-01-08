import { hasErrored, isLoading, fetchDataSuccess } from '../actions/index.js'

export const fetchHouses = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('http://localhost:3001/api/v1/houses')
      if(!response.ok) {
        throw Error(response.statusText)
      }
      const houses = await response.json()
      dispatch(isLoading(false))
      dispatch(fetchDataSuccess(houses))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}