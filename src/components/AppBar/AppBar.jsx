import './AppBar.css';

import { useAuth } from 'hooks/useAuth';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
