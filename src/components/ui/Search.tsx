
import { SearchCheckIcon } from "lucide-react";
import React from "react";

interface searchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<searchProps> = ({ search, setSearch }) => {
  return (
    <div className="flex items-center w-full shadow-shape rounded-lg p-2">
      <input
      placeholder="Buscar atividade por título"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-zinc-600 text-zinc-300 bg-transparent flex-1 outline-none"
      />
      <SearchCheckIcon className="font-light" />
    </div>
  );
};

export default Search;
