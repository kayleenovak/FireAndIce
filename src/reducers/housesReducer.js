export const housesReducer = (state = [], action) => {
  switch (action.type) {
    case 'DATA_FETCH_SUCCESS':
      return action.houses
    default: 
      return state
  }
}