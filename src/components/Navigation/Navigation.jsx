import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};
