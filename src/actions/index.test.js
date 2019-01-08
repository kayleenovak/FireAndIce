import { hasErrored, isLoading, fetchDataSuccess } from './index.js'

describe('hasErrored', () => {
  it('should return an action object with the type HAS_ERRORED and with a check property', () => {
    const mockCheck = false
    const expected = {
      type: 'HAS_ERRORED',
      check: mockCheck
    }

    const result = hasErrored(mockCheck)

    expect(result).toEqual(expected)
  })
})

describe('isLoading', () => {
  it('should return and action object with the type IS_LOADING and with a check property', () => {
    const mockCheck = false
    const expected = {
      type: 'IS_LOADING',
      check: mockCheck
    }

    const result = isLoading(mockCheck)

    expect(result).toEqual(expected)
  })
})

describe('fetchDataSuccess', () => {
  it('should return and action object with the type DATA_FETCH_SUCCESS and with a houses property', () => {
    const mockHouses = [
      {
        house: 'Dayne of Starfall'
      },
      {
        house: 'Mormont of Bear Island'
      }
    ]
    const expected = {
      type: 'DATA_FETCH_SUCCESS',
      houses: mockHouses
    }

    const result = fetchDataSuccess(mockHouses)

    expect(result).toEqual(expected)
  })
})