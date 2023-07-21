import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input className="filter" onChange={handleInputChange} />
    </>
  );
};
