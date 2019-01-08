export const isLoadingReducer = (state = false, action.check) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.check
    default:
      return state
  }
}