import { hasErrored, isLoading, fetchDataSuccess } from '../actions/index.js'

export const fetchMembers = (houses) => {
return async (dispatch) => {
    dispatch(isLoading(true))
    const newHouses = houses.map(async house => {
      const promises = []
      house.swornMembers.forEach(async member => {
        try {
          const response = await fetch(member)
          if(!response.ok) {
            throw Error(response.statusText)
          }
          const newMember = await response.json()
          dispatch(isLoading(false))
          promises.push(newMember.name)
        } catch (error) {
          dispatch(hasErrored(true))
        }

      })
      return promises
    })
    return Promise.all(newHouses)
  }
}