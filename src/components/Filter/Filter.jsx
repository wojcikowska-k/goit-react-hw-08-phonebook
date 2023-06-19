import React from 'react';

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

export default Filter;
