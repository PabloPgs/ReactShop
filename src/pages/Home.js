import React, { useEffect } from 'react';
import db from '../assets/fullDb.json';
import { Categories, Filters, Products } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { setItems, setActiveSort, addToCart } from '../redux/actions';

const categories = [
  { name: 'Все', type: 'all' },
  { name: 'Диваны', type: 'couch' },
  { name: 'Кровати', type: 'bed' },
  { name: 'Кресла', type: 'armchair' },
  { name: 'Стулья', type: 'chair' },
  { name: 'Шкафы', type: 'cupboard' },
];

const Home = () => {
  const dispatch = useDispatch();
  const { items, activeSort } = useSelector((state) => state);

  const setFilterType = (category) => {
    if (category === 'all') {
      dispatch(setItems(db));
      return;
    }

    const newItems = db.filter((item) => item.category === category);
    dispatch(setItems(newItems));
  };

  const setFilterOrder = (sort) => {
    let newItems;
    if (sort === 'all') {
      newItems = [...db];
    } else if (sort === 'popularity') {
      newItems = [...items.sort((a, b) => b.popularity - a.popularity)];
    } else if (sort === 'hot') {
      newItems = [...items.sort((a, b) => b.hot - a.hot)];
    } else if (sort === 'expensive') {
      newItems = [...items.sort((a, b) => b.newPrice - a.newPrice)];
    } else if (sort === 'cheap') {
      newItems = [...items.sort((a, b) => a.newPrice - b.newPrice)];
    }

    dispatch(setActiveSort(sort));
    dispatch(setItems(newItems));
  };

  const onAddToCart = (id) => {
    const item = items.find((item) => item.id === id);

    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(setItems(db));
  }, []);

  return (
    <main className="main">
      <Categories items={categories} onSetFilterType={setFilterType} />
      <Filters onSetFilterOrder={setFilterOrder} activeFilter={activeSort} />
      <Products onAddToCart={onAddToCart} items={items} />
    </main>
  );
};

export default Home;
