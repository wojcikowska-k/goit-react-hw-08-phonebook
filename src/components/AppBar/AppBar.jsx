import './AppBar.css';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <header className="header">
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
