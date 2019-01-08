import { hasErroredReducer } from './hasErroredReducer.js'

describe('hasErroredReducer', () => {
  it('should return a new state if the type is HAS_ERRORED', () => {
    const mockAction = {
      type: 'HAS_ERRORED',
      check: true
    }
    const mockState = false

    const result = hasErroredReducer(mockState, mockAction)

    expect(result).toEqual(true)
  } )

  it('should return a default state if the state is undefined and there is no action', () => {
    const mockAction = {}

    const result = hasErroredReducer(undefined, mockAction)

    expect(result).toEqual(false)
  })
})