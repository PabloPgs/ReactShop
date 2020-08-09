import React from 'react';

const FiltersOrder = ({ items, onChangeOrder, activeFilter }) => {
  return (
    <div className="filters__order filters__box">
      <h5 className="filters__order-title title-small">Порядок:</h5>
      {items.map((filter) => {
        return (
          <label key={filter.name} onClick={() => onChangeOrder(filter.type)} className="filter">
            <input
              type="radio"
              defaultChecked={activeFilter === filter.type ? true : false}
              name="filters-radio"
              className="filters__order-filter"
            />
            <span>{filter.name}</span>
          </label>
        );
      })}
    </div>
  );
};

export default FiltersOrder;
