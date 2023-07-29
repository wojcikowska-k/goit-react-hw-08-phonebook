import './Hero.css';

import { NavLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <NavLink className="hero" to="/register">
        PhoneMe!
      </NavLink>
    </>
  );
};
