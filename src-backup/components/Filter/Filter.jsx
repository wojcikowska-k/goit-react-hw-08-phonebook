import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleInputChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="filter"
        name="filter"
        value={filter}
        onChange={handleInputChangeFilter}
      />
    </div>
  );
};
