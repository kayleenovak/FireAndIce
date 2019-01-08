import React from 'react'
import { mapDispatchToProps } from './App.js'
import { shallow } from 'enzyme'
import { fetchHouses } from '../../thunks/fetchHouses.js'

jest.mock('../../thunks/fetchHouses.js')

describe('mapDispatchToProps', () => {
  it('should call dispatch with the correct params', () => {
    const mockDispatch = jest.fn()
    const actionDispatch = fetchHouses()
    
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchHouses()

    expect(mockDispatch).toHaveBeenCalledWith(actionDispatch)
  })
})