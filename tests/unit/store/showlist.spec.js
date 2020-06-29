import store from '@/store/modules/showlist'
import { getAllShows } from '@/services/api'
// Mock module with Jest mock functions
jest.mock('@/services/api')

describe('In store', () => {
  describe('In mutations', () => {
    it('ALL_TV_SHOWS sets state.allTvShows to allTvShows', () => {
      const allTvShows = [{ id: 1, name: 'xyz' }]
      const state = {
        allTvShows: {}
      }
      store.mutations.ALL_TV_SHOWS(state, allTvShows)
      expect(state.allTvShows).toBe(allTvShows)
    })
    it('ERRORS sets state.loading to loading', () => {
      const allTvShows = [{ id: 1, name: 'xyz' }]
      const state = {
        allTvShows: {}
      }
      const error = '';
      store.mutations.ERRORS(state, error)
      expect(state.error).toBe(error)
    })
  })
  describe('In actions', () => {
    let commit
    beforeEach(() => {
      commit = jest.fn() // mock the function
    })

    it('getTvShows should commits allTvShows returned by getAllShows Api method', async () => {
      const allTvShows = [{ id: 1, name: 'xyz' }]
      // Control mock to resolve with an array of objects
      getAllShows.mockResolvedValue(allTvShows)
      await store.actions.getTvShows({ commit }) //todo
      expect(commit).toHaveBeenCalledWith('ALL_TV_SHOWS', allTvShows)
    })
  })
  describe('getters', () => {
    let state = {}
    beforeEach(() => {
      state = {
        allTvShows : [{
          image: {medium:"abcd"},
          premiered:"abcd",
          rating:{average:8},
          genres:["asd", "dfdf"]
        },
        {
          image: {medium:"asdsdvbcd"},
          premiered:"abcdfdfd",
          rating:{average:10},
          genres:["avdvdsd", "dfddfvdvf"]
        }]
      }
    })
    it('values returned', ()=>{
      const allTvShows = store.getters.getAllTvShows(state)
       expect(allTvShows).toEqual(state.allTvShows)

    })
  })
})
