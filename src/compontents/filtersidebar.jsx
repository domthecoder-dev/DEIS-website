import React, { useState, useEffect } from 'react';
import '../styles/filter-sidebar.css'; // Create this new CSS file

export default function FilterSidebar({ allProducts, onFilterChange, selectedFilters, onClearFilters }) {
  // ⭐ State variables updated to match the new filters ⭐
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [connectivity, setConnectivity] = useState([]);

  useEffect(() => {
    // ⭐ Extract unique categories, types, and connectivity values ⭐
    const uniqueCategories = [...new Set(allProducts.map(p => p.category))];
    setCategories(['', ...uniqueCategories]);

    const uniqueTypes = [...new Set(allProducts.map(p => p.type).filter(Boolean))];
    setTypes(['', ...uniqueTypes]);

    // Changed from "ingredients" to "Connectivity"
    const uniqueConnectivity = [...new Set(allProducts.map(p => p.specifications?.Connectivity).filter(Boolean))];
    setConnectivity(['', ...uniqueConnectivity]);
  }, [allProducts]);

  const handleCategoryChange = (e) => {
    onFilterChange.setCategory(e.target.value);
  };

  // ⭐ Updated handler name to match the new 'type' filter ⭐
  const handleTypeChange = (e) => {
    onFilterChange.setType(e.target.value);
  };

  // ⭐ Updated handler name and logic for the new 'Connectivity' filter ⭐
  const handleConnectivityChange = (e) => {
    onFilterChange.setConnectivity(e.target.value);
  };

  const handleClearAllFilters = () => {
    onClearFilters();
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header-row">
        <h3>Filters</h3>
        {(selectedFilters.category || selectedFilters.type || selectedFilters.connectivity) && (
          <button className="clear-filters-button" onClick={handleClearAllFilters}>
            Clear All
          </button>
        )}
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <select
          className="filter-select"
          value={selectedFilters.category}
          onChange={handleCategoryChange}
        >
          {categories.map(cat => (
            <option key={cat || 'all-categories'} value={cat}>
              {cat === '' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        {/* ⭐ Changed the filter title to 'Type' ⭐ */}
        <h4>Type</h4>
        <select
          className="filter-select"
          value={selectedFilters.type}
          onChange={handleTypeChange}
        >
          {types.map(type => (
            <option key={type || 'all-types'} value={type}>
              {type === '' ? 'All Types' : type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        {/* ⭐ Changed the filter title to 'Connectivity' ⭐ */}
        <h4>Connectivity</h4>
        <select
          className="filter-select"
          value={selectedFilters.connectivity}
          onChange={handleConnectivityChange}
        >
          {connectivity.map(con => (
            <option key={con || 'all-connectivity'} value={con}>
              {con === '' ? 'All' : con}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}