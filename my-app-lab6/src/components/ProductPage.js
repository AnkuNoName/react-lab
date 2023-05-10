import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductPage;