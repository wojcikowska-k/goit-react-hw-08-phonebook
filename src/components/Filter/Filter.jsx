import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filteredList }) => {
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
  filteredList: PropTypes.array,
};

export default Filter;
