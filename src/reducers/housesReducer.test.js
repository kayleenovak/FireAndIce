import { housesReducer } from './housesReducer.js'

describe('housesReducer', () => {
  it('should return an array of houses if the action type if data fetch success', () => {
    const mockState = []
    const mockHouses = [
      {
        house: 'Dayne of Starfall'
      },
      {
        house: 'Mormont of Bear Island'
      }
    ]
    const mockAction = {
      type: 'DATA_FETCH_SUCCESS',
      houses: mockHouses
    }
    const expected = [
      {
        house: 'Dayne of Starfall'
      },
      {
        house: 'Mormont of Bear Island'
      }
    ]

    const result = housesReducer(mockState, mockAction)

    expect(result).toEqual(expected)
  })

  it('should return a default state if state is undefined and the action is an empty object', () => {
    const mockAction = {}
    const expected = []

    const result = housesReducer(undefined, mockAction)

    expect(result).toEqual(expected)
  })
})