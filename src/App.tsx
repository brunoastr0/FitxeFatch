import { useState } from "react";
import Player from "./components/Player";
import Table from "./components/Table";
import GameOver from "./components/GameOver";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o">("x"); // Track the current player
  const [gameStatus, setGameStatus] = useState<string>(""); // Track the game status (winner or draw)
  const [player1Name, setPlayer1Name] = useState("Player1");
  const [player2Name, setPlayer2Name] = useState("Player2");
  const [board, setBoard] = useState<string[]>(Array(9).fill("")); // Track the board
  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "x" ? "o" : "x"));
  };
  const resetGame = () => {
    setGameStatus("");
    setBoard(Array(9).fill(""));
    setCurrentPlayer("x");
    setPlayer1Name("Player1");
    setPlayer2Name("Player2");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 w-screen h-screen ">
        <div className="flex justify-center items-center gap-2">
          <img src="src/assets/game-logo.png" alt="game logo" width={100} />
          <span className="text-5xl font-bold text-white">FitxeFatch</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 w-[800px] h-[700px] space-y-2 bg-[#181C14] rounded-lg ">
          <div className="flex justify-between gap-2 w-full">
            <Player
              name={player1Name}
              setPlayername={setPlayer1Name}
              symbol="x"
            />
            <Player
              name={player2Name}
              setPlayername={setPlayer2Name}
              symbol="o"
            />
          </div>
          <div className="w-[500px] h-[500px]">
            <Table
              currentPlayer={currentPlayer}
              onMove={switchPlayer}
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              player1Name={player1Name}
              player2Name={player2Name}
              board={board}
              setBoard={setBoard}
            />
          </div>
          {gameStatus && (
            <div className="absolute opacity-90 w-[800px] h-[700px]">
              <GameOver winner={gameStatus} onRestart={resetGame} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
