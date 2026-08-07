import "../../../styles/SearchBar.css";

const SearchBar = ({ search, setSearch, placeholder = "Search delicious food..." }) => {
  return (
    <div className="search-bar-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
