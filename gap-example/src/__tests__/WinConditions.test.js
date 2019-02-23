import WinConditions from '../models/WinConditions';

describe('Win Conditions', () => {
  it('Has 8 possibilities', () => {
    expect(WinConditions.length).toEqual(8)
  })
  it('Has first row win', () => {
    // const firstRow = [true, true, true, false, false, false, false, false, false]
  })
})