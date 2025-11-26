export default function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {

  return (
    <div className="flex gap-2 w-full">
      <input
        type="text"
        placeholder="Buscar por título..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
      />
    </div>
  );
}
