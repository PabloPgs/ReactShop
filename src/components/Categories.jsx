import React, { useState } from 'react';

const Categories = ({ items, onSetFilterType }) => {
  const [activeBtn, setActiveBtn] = useState('all');

  const setActiveFilter = (type) => {
    onSetFilterType(type);
    setActiveBtn(type);
  };

  return (
    <div className="categories-btns">
      {items.map((filter) => {
        const cls = ['categories-btns__btn'];
        if (filter.type === activeBtn) {
          cls.push('active');
        }
        return (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.type)}
            className={cls.join(' ')}
          >
            {filter.name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
