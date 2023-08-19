import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">

  <div className="imgBox">
    <img src={product.img}
    alt="mouse corsair" className="mouse" />
  </div>

  <div className="contentBox">
    <h3>{product.title}</h3>
    <h2 className="price">${product.price}</h2>
    <Link to={`/productos/${product.id}`}>
    <a href="#" className="buy">Ver más</a>
    </Link>|
  </div>

</div>
  );
};

export default ProductCard;
