import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChangeFilter = event =>
    dispatch(setFilter(event.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className="filter"
        name="filter"
        onChange={handleInputChangeFilter}
      />
    </>
  );
};
