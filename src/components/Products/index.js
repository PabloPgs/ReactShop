import React from 'react';

import ProductsCard from './ProductsCard';
import Loader from '../Loader';

const Products = ({ items, loading, onAddToCart }) => {
  return (
    <div className="products">
      <div className="products__inner">
        {loading && <Loader />}
        {items.length > 0 &&
          !loading &&
          items.map((item) => {
            return <ProductsCard onAddToCart={onAddToCart} key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Products;
