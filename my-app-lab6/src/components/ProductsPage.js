import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');
    const url = searchQuery
      ? `https://dummyjson.com/products/search?q=${searchQuery}`
      : `https://dummyjson.com/products/category/${location.pathname.split('/')[2]}`;
      
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value;
    setSearchText(searchQuery);
  };

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;