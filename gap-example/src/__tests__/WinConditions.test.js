import WinConditions from '../models/WinConditions';

describe('Win Conditions', () => {
  it('Has 8 possibilities', () => {
    expect(WinConditions.length).toEqual(8)
  })
  /* Ideally, you would test each win condition calculation here
  */
})