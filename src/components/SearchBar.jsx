import { FaSearch } from "react-icons/fa"

const SearchBar = ({ query, setQuery, findSimilar, loading }) => {
  return (
    <div className="search-bar">
      <div className="search">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button onClick={() => findSimilar()} disabled={loading}>
          Search
        </button>
      </div>
    </div>
  )
}
export default SearchBar
