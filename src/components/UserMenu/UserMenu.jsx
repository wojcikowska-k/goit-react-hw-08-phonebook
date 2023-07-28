import './UserMenu.css';

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => dispatch(logOut());

  return (
    <div className="wrapper">
      <p className="username">Welcome, {user?.name}</p>
      <button className="button" type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
