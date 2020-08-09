import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { changeItemCount, clearCart, deleteCartItem } from '../redux/actions';

import { CartCard } from '../components';
import { FaSadCry } from 'react-icons/fa';

const Cart = () => {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChangeCount = (id, num) => {
    dispatch(changeItemCount(id, num));
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  const onDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <section className="cart">
      <h4 className="cart__title">Корзина</h4>
      {cartItems.length !== 0 ? (
        <>
          <p className="cart__total">
            Всего к оплате:{' '}
            {cartItems.reduce((acc, item) => (acc += item.newPrice * item.count), 0)}
            руб
          </p>
          <div className="cart__body">
            {cartItems.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  onDeleteCartItem={onDeleteCartItem}
                  onChangeCount={onChangeCount}
                  {...item}
                />
              );
            })}
          </div>
          <div className="cart__footer">
            <button className="btn btn-big btn-main" onClick={onClearCart}>
              Очистить корзину
            </button>
            <button className="btn btn-big btn-main">Оплатить</button>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <div className="cart__empty-text">
            Корзина пуста...
            <FaSadCry />
          </div>
          <NavLink to="/">
            <button className="btn btn-main btn-big">На главную</button>
          </NavLink>
        </div>
      )}
    </section>
  );
};

export default Cart;
