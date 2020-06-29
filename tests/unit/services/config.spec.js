import  '../../../src/services/config'
import axios from 'axios';

describe('base URL', () => {
    test('success', () => {
      expect(axios.defaults.baseURL).toMatch("http://api.tvmaze.com");
    });
})
