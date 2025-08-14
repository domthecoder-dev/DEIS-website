import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/product';
import ProductCard from '../compontents/productcard';
import FilterSidebar from '../compontents/filtersidebar';
import SearchBar from '../compontents/SearchBar';
import '../styles/products-page.css';

const ProductList = ({ productsToDisplay }) => {
  return (
    <div className="product-list-grid">
      {productsToDisplay.length > 0 ? (
        productsToDisplay.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="no-products-found">No products found matching your criteria.</p>
      )}
    </div>
  );
};


export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  // ⭐ Renamed to match the new filter props being passed to the sidebar ⭐
  const searchTerm = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || '';
  const selectedType = searchParams.get('type') || '';
  const selectedConnectivity = searchParams.get('connectivity') || '';

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const handleFilterChange = (filterName, value) => {
    setSearchParams(prevParams => {
      if (value) {
        prevParams.set(filterName, value);
      } else {
        prevParams.delete(filterName);
      }
      return prevParams;
    });
  };

  useEffect(() => {
    let currentFilteredProducts = [...products];

    // 1. Filter by Search Term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentFilteredProducts = currentFilteredProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    // 2. Filter by Category
    if (selectedCategory) {
      currentFilteredProducts = currentFilteredProducts.filter(product =>
        product.category === selectedCategory
      );
    }

    // ⭐ Updated to filter by the 'type' property ⭐
    if (selectedType) {
      currentFilteredProducts = currentFilteredProducts.filter(product =>
        product.type === selectedType
      );
    }

    // ⭐ Updated to filter by the 'Connectivity' specification ⭐
    if (selectedConnectivity) {
      currentFilteredProducts = currentFilteredProducts.filter(product =>
        product.specifications?.Connectivity === selectedConnectivity
      );
    }

    setFilteredProducts(currentFilteredProducts);
  }, [searchParams]);

  return (
    <div className="products-page-container">
      <div className="products-header">
        <h1 className="products-page-title">All Products</h1>
        <SearchBar onSearch={(value) => handleFilterChange('search', value)} />
      </div>

      <div className="products-content-wrapper">
        <FilterSidebar
          allProducts={products}
          onFilterChange={{
            setCategory: (value) => handleFilterChange('category', value),
            setType: (value) => handleFilterChange('type', value),
            setConnectivity: (value) => handleFilterChange('connectivity', value),
          }}
          selectedFilters={{
            category: selectedCategory,
            type: selectedType,
            connectivity: selectedConnectivity,
          }}
          onClearFilters={clearAllFilters}
        />
        <ProductList productsToDisplay={filteredProducts} />
      </div>
    </div>
  );
}