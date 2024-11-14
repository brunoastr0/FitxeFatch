interface GameOverProps {
  winner: string;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, onRestart }) => {
  return (
    <div className=" flex flex-col items-center justify-center text-center gap-4 bg-[#181C14] p-4 rounded-lg w-full h-full">
      <p className="text-7xl font-bold text-yellow-400">Game Over!</p>
      <div className="text-white text-xl font-bold mb-4 px-2 space-x-2  ">
        FitxeFatch.
        {winner === "draw" ? "Empate" : `${winner} ganha!`}
      </div>
      <button
        className="bg-transparent border border-yellow-500 text-yellow-500 p-2 rounded-md hover:bg-yellow-500 hover:text-gray-950"
        onClick={onRestart}
      >
        Torna jga!
      </button>
    </div>
  );
};

export default GameOver;
