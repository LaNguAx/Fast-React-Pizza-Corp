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
        placeholder="Search order #"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
