import { useState } from 'react'

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <div className="search-section">
      <div className="search-container">
        <h1 className="search-title">Discover Amazing Movies</h1>
        <p className="search-subtitle">Find your next favorite movie from our vast collection</p>
        
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-container">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder="Search for movies, shows, actors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={loading || !query.trim()}
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                'Search'
              )}
            </button>
          </div>
        </form>
        
        <div className="popular-searches">
          <span>Popular:</span>
          <button onClick={() => onSearch('Marvel')} className="popular-tag">Marvel</button>
          <button onClick={() => onSearch('Batman')} className="popular-tag">Batman</button>
          <button onClick={() => onSearch('Star Wars')} className="popular-tag">Star Wars</button>
          <button onClick={() => onSearch('Disney')} className="popular-tag">Disney</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar