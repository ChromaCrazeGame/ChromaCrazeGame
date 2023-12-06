class GameState {
  // define properties
  public demoButtonPresses: number;
  public gameBoard: string[][];
  
  // populate defaults
  constructor () {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board.push(new Array(10).fill('inherit'));
    }
    this.demoButtonPresses = 0;
    this.gameBoard = board;
  }


}

export default GameState;
