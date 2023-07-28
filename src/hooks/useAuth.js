import { useSelector } from 'react-redux';

import {
  selectIsRefreshing,
  selectIsLoggedIn,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isRefreshing,
    isLoggedIn,
    user,
  };
};
