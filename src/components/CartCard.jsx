import React from 'react';
import { FaChevronUp, FaChevronDown, FaTrashAlt } from 'react-icons/fa';

const CartCard = ({ id, name, newPrice, img, count, onChangeCount, onDeleteCartItem }) => {
  return (
    <div className="cart__card">
      <div className="cart__card-header">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="cart__card-body">
        <FaChevronUp className="cart__card-iconUp" onClick={() => onChangeCount(id, 1)} />
        <p>{count}</p>
        <FaChevronDown className="cart__card-iconDown" onClick={() => onChangeCount(id, -1)} />
      </div>
      <div className="cart__card-footer">
        <p>Итог: {count * newPrice} руб</p>
        <button className="btn btn-small btn-main" onClick={() => onDeleteCartItem(id)}>
          Delete All
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
