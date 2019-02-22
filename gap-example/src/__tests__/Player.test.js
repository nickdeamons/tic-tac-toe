import Player from '../models/Player';

describe('Player', () => {
  it('Has defaults: dude, X, 1', () => {
    const player = new Player();
    expect(player.displayText).toEqual('Player, dude');
    expect(player.piece).toEqual('X');
    expect(player.id).toEqual(1);
  })
});