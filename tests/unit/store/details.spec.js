import {
  getShowDetailsById
} from '@/services/api'
import store from "@/store/modules/details";
// Mock module with Jest mock functions
jest.mock('@/services/api')

describe('In store', () => {
  describe('In mutations', () => {
    let state = {}
    beforeEach(() => {
      state = {
        tvShow: {},
        cast: [],
        loading: false,
        error: ''
      }
    })
    //TV_SHOWS_CAST, TV_SHOWS_SEASON, LOADING, ERRORS
    it('TV_SHOWS sets state.tvShow to tvShow', () => {
      const tvShow = [{ id: 1, name: 'xyz' }]
      store.mutations.TV_SHOWS(state, tvShow)
      expect(state.tvShow).toBe(tvShow)
    })

    it('TV_SHOWS_CAST sets state.cast to cast', () => {
      const cast = [{ id: 1, name: 'xyz' }]
      store.mutations.TV_SHOWS_CAST(state, cast)
      expect(state.cast).toBe(cast)
    })

    it('LOADING sets state.loading to loading', () => {
      const loading = false;
      store.mutations.LOADING(state, loading)
      expect(state.loading).toBe(loading)
    })
    it('ERRORS sets state.loading to loading', () => {
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

    it('getTvShowDetailsById should commits TV_SHOWS returned by getShowDetailsById Api method', async () => {
      const TV_SHOWS = [{ id: 1, name: 'xyz' }]
      // Control mock to resolve with an array of objects
      getShowDetailsById.mockResolvedValue(TV_SHOWS)
      await store.actions.getTvShowDetailsById({ commit })
      expect(commit).toHaveBeenCalledWith('TV_SHOWS', TV_SHOWS)
    })
  })

  describe('getters', () => {
    let state = {}
    beforeEach(() => {
      state = {
        tvShow: {image: {medium:"abcd"},
        premiered:"abcd",
        rating:{average:8},
        genres:["asd", "dfdf"]},
        cast: [ {image: {medium:"abcd"}}, {person: {name : "sdasd"}}],
        loading: false
      }
    })
    it('values returned', ()=>{
      const tvShowDetails = store.getters.getTvShow(state)
       expect(tvShowDetails).toEqual(state.tvShow)

    })
    it('values returned', ()=>{
      const tvShowCast = store.getters.getTvShowCast(state)
       expect(tvShowCast).toEqual(state.cast)

    })
    it('values returned', ()=>{
      const loaded = store.getters.loading(state)
       expect(loaded).toEqual(false)

    })

  })
})
