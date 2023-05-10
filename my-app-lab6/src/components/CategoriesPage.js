import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}/products`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;