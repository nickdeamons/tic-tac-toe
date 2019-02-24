class Player {
  constructor(name = 'dude', piece = 'X', id = 1) {
   this.displayText = `Player ${name}`;
   this.name = name;
   this.piece = piece;
   this.id = id;
  }
}

export default Player;