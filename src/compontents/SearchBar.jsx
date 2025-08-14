import React from 'react';
// The styling for this is already in products-page.css, no new file needed for now

export default function SearchBar({ onSearch, initialQuery = '' }) {
  // Use a controlled component for the input
  const [query, setQuery] = React.useState(initialQuery);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Immediately call onSearch prop to update parent's state
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="search-input"
        aria-label="Search products"
      />
    </div>
  );
}