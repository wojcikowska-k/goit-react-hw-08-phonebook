import React from 'react';

const Filter = ({ filter, handleInputChangeFilter }) => {
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

export default Filter;
