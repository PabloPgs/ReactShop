import React from 'react';

import { FaStar, FaRegStar } from 'react-icons/fa';
import { IoIosCart } from 'react-icons/io';

const ProductsCard = ({
  id,
  name,
  img,
  newPrice,
  oldPrice,
  rating,
  popularity,
  hot,
  onAddToCart,
}) => {
  return (
    <div className="products__card">
      <div className="products__card-favourite">
        <span>{popularity}</span>
        <FaRegStar />
      </div>

      <img className="products__card-img" src={img} alt="" />
      <div className="products__card-price">
        <span className="new-price">{newPrice} руб</span>
        {oldPrice !== 0 && <span className="old-price">{oldPrice} руб</span>}
      </div>
      <div className="products__card-body">
        <div className="products__card-name">{name}</div>
        {hot && <div className="products__card-hot">Новинка!</div>}
      </div>
      <div className="products__card-footer">
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} className="star-yellow" />
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <FaRegStar key={i} className="star-grey" />
            ))}
          <span> ({rating})</span>
        </div>
        <button onClick={() => onAddToCart(id)} className="btn btn-main btn-small">
          <IoIosCart />
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
