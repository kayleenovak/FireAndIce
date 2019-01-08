export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  check
})

export const isLoading = (check) => ({
  type: 'IS_LOADING',
  check
})

export const dataFetchSuccess = (houses) => ({
  type: 'DATA_FETCH_SUCCESS',
  houses
})