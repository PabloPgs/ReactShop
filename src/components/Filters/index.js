import React from 'react';

import FiltersOrder from './FiltersOrder';

const filterOrder = [
  { name: 'Все', type: 'all' },
  { name: 'Популярное', type: 'popularity' },
  { name: 'Новинки', type: 'hot' },
  { name: 'Сначала Дорогие', type: 'expensive' },
  { name: 'Сначала Дешевые', type: 'cheap' },
];

const Filters = ({ onSetFilterOrder, activeFilter }) => {
  return (
    <div className="filters">
      <div className="filters__inner">
        <FiltersOrder
          items={filterOrder}
          onChangeOrder={onSetFilterOrder}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
};

export default Filters;
