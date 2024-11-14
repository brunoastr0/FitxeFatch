interface TableProps {
  currentPlayer: "x" | "o";
  onMove: () => void;
  gameStatus: string;
  setGameStatus: (status: string) => void;
  player1Name: string;
  player2Name: string;
  board: string[];
  setBoard: (board: string[]) => void;
}
function Table({
  currentPlayer,
  onMove,
  gameStatus,
  setGameStatus,
  player1Name,
  player2Name,
  board,
  setBoard,
}: TableProps) {
  const checkWinner = (newBoard: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        if (newBoard[a] === "x") {
          setGameStatus(`${player1Name}`);
        } else {
          setGameStatus(`${player2Name}`);
        }
        return true;
      }
    }

    if (newBoard.every((square) => square !== "")) {
      setGameStatus("It's a draw!");
      return true;
    }

    return false;
  };
  const handleClick = (index: number) => {
    if (board[index] === "" && gameStatus === "") {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      if (!checkWinner(newBoard)) {
        onMove();
      }
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-3 grid-flow-row gap-4 p-4">
      {board.map((value, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="bg-[#3C3D37] w-full h-full text-7xl font-bold text-center text-white rounded-md hover:bg-[#686D76] flex items-center justify-center"
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Table;
