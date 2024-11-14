interface PlayerProps {
  name: string;
  symbol: "x" | "o";
  setPlayername: (name: string) => void;
}

function Player({ name, symbol, setPlayername }: PlayerProps) {
  return (
    <div className="flex items-center justify-center w-96 p-1 border-[2px] border-yellow-600 rounded-s">
      <input
        className=" h-10  text-yellow-600  border-none outline-none bg-transparent"
        value={name}
        onChange={(e) => {
          setPlayername(e.target.value);
        }}
      />
      <span className="text-yellow-600 text-lg">{symbol}</span>
    </div>
  );
}

export default Player;
