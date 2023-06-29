import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filteredList }) => {
  const handleInputChangeFilter = event => {
    filteredList(event.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className="filter"
        name="filter"
        onChange={handleInputChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filteredList: PropTypes.func,
};
