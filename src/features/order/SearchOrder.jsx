import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} action="GET">
      <input
        className="w-28 rounded-full px-4 py-2 text-xs placeholder:text-stone-400 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 "
        placeholder="Search order #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
