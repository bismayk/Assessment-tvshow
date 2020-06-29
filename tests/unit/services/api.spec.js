import axios from 'axios'
// Import intercepted by Jest to return mock getMealByName function
import {
  getAllShows,
  getShowDetailsById,
  getSearchResult
} from '@/services/api'

// Mock module with Jest mock functions
jest.mock('axios')

describe('In api, ', () => {
  it('getAllShows api should call', () => {
    const allTvShows = [{ id: 1, name: 'xyz' }]
    axios.get.mockResolvedValue(allTvShows)
    getAllShows().then(result => {
      expect(result).toEqual(allTvShows)
    })
  })

  it('getSearchResult api should call', () => {
    const query = 'testQuery'
    const allTvShows = [{ id: 1, name: 'xyz' }]
    axios.get.mockResolvedValue(allTvShows)
    getSearchResult(query).then(result => {
      expect(result).toEqual(allTvShows)
    })
  })

  it('getShowDetailsById api should call', () => {
    const showDetails = [{ id: 1, name: 'xyz' }]
    axios.get.mockResolvedValue(showDetails)
    getShowDetailsById(showDetails.id).then(result => {
      expect(result).toEqual(showDetails)
    })
  })
})
