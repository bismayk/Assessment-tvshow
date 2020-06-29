import { sortTvSHow } from '@/utils/ratingSort'
describe('In common, ', () => {
  it('sortTvShow should return -1 when a has higher rating', () => {
    const a = { rating: { average: '9.2' } }
    const b = { rating: { average: '6.8' } }
    const expected = sortTvSHow(a, b)
    expect (expected).toBe(-1);
  })


  it('sortTvShow should return 1 when b has higher rating', () => {
    const a = { rating: { average: '7.2' } }
    const b = { rating: { average: '8.1' } }
    const expected = sortTvSHow(a, b)
    expect (expected).toBe(1);
  })

  it('sortTvShow should return 1 when b has higher rating', () => {
    const a = { rating: { average: '6.2' } }
    const b = { rating: { average: '6.2' } }
    const expected = sortTvSHow(a, b)
    expect (expected).toBe(0);
  })
})
