
import store from "../../../src/store/index";
// Mock module with Jest mock functions
jest.mock('@/services/api')

describe('In store', () => {
  it('it should have all state objects ', () => {
    expect(store.state.showList).toBeTruthy();
  });
  it('it should have all state objects ', () => {
    expect(store.state.details).toBeTruthy();
  });
  it('it should have all state objects ', () => {
    expect(store.state.search).toBeTruthy();
  });
})