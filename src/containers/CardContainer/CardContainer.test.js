import { mapStateToProps } from './CardContainer.js'

describe('mapStateToProps', () => {
  it('should return an object with with the keus of houses, isLoading, hasErrored', () => {
    const mockHouses = [
      {
        house: 'Dayne of Starfall'
      },
      {
        house: 'Mormont of Bear Island'
      }
    ] 
    const mockState = {
      houses: mockHouses,
      isLoading: true,
      hasErrored: false
    }
    const expected = {
      houses: mockHouses,
      isLoading: true,
      hasErrored: false
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})