import {
    getSearchResult
  } from '@/services/api'
  import store from "@/store/modules/search";
  // Mock module with Jest mock functions
  jest.mock('@/services/api')
  
  describe('In store', () => {
   describe('In mutations', () => {
      let state = {}
      beforeEach(() => {
        state = {
          results: [],
          error: ''
        }
      })
  
      it('TV_SHOW found', () => {
        const results = [{ id: 1, name: 'xyz' }]
        store.mutations.UPDATE_RESULTS(state, results)
        expect(state.results).toBe(results)
      })
  
      it('Search is cleared', () => {
        const results = []
        store.mutations.CLEAR(state, results)
        expect(state.results).toStrictEqual(results)
      })
  
      it('ERRORS sets state.loading to loading', () => {
        const error = '';
        store.mutations.ERR(state, error)
        expect(state.error).toBe(error)
      })
    })
    describe('In actions', () => {
      let commit
      beforeEach(() => {
        commit = jest.fn() // mock the function
      })
  
      it('getTvShowDetailsById should commits TV_SHOW returned by getSearchResult Api method', async () => {
        const results = [{ id: 1, name: 'xyz' }]
        // Control mock to resolve with an array of objects
        getSearchResult.mockResolvedValue(results)
        await store.actions.getResult({ commit })
        expect(commit).toHaveBeenCalledWith('UPDATE_RESULTS', results)
      });
      it('Clear method', async () => {
        await store.actions.clearResult({ commit })
        expect(commit).toHaveBeenCalledWith('CLEAR')
      })
    })
    describe('getters', () => {
        let state = {}
        beforeEach(() => {
          state = {
            results : [{
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
          const results = store.getters.getResult(state)
           expect(results).toEqual(state.results)
    
        })
      })
  })
  