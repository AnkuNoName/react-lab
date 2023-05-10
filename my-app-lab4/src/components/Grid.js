import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState('');
  const cartIconRef = useRef(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const sortProducts = () => {
    let sortedProducts = [...products];

    switch (sortValue) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      // Додаткові випадки сортування
      default:
        // Не застосовувати сортування
        break;
    }

    setProducts(sortedProducts);
  };

  const handleCardClick = () => {
    cartIconRef.current.focus();
  };

  const addToFavorites = (productId) => {
    const updatedFavorites = [...favorites, productId];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleCompareClick = (productName) => {
    toast.info(`Товар ${productName} додано до порівняння`);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  useEffect(() => {
    sortProducts(); // Сортувати товари при зміні значення сортування
  }, [sortValue]);

  return (
    <div>
      <select value={sortValue} onChange={e => setSortValue(e.target.value)}>
        <option value="">Без сортування</option>
        <option value="price-asc">Ціна: За зростанням</option>
        <option value="price-desc">Ціна: За спаданням</option>
        {/* Додаткові опції сортування */}
      </select>

      <select value={category} onChange={handleCategoryChange}>
        <option value="">Всі категор</option>
             {/* Додаткові опції категорій */}
      </select>

      {filteredProducts.map(product => (
        <div key={product.id} onClick={handleCardClick}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.price}</p>
          <button ref={cartIconRef}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </button>
          <button onClick={() => addToFavorites(product.id)}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
          <button onClick={() => handleCompareClick(product.title)}>
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </button>
          {/* Додаткові елементи та функціональність */}
        </div>
      ))}

      <ToastContainer /> {/* Контейнер для відображення нотіфікацій */}
    </div>
  );
};

export default ProductList;