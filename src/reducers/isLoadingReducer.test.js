import { isLoadingReducer } from './isLoadingReducer.js'

describe('isLodaingReducer', () => {
  it('should return a new state if the action type is IS_LOADING', () => {
    const mockAction = {
      type: 'IS_LOADING',
      check: true
    }
    const mockState = false
    const expected = true

    const result = isLoadingReducer(mockState, mockAction)

    expect(result).toEqual(true)
  })

  it('should return a default state if state is undefined, and the action has no type', () => {
    const mockAction = {}
    const expected = false

    const result = isLoadingReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})