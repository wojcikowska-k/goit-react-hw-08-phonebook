// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

// import { ContactForm } from './components/ContactForm/ContactForm';
// import { Filter } from './components/Filter/Filter';
// import { ContactList } from './components/ContactList/ContactList';
import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Contacts } from './pages/Contacts/Contacts';
import { Home } from './pages/Home/Home';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    // <div className="container">
    //   <h1>Phonebook</h1>
    //   <ContactForm />

    //   <h2>Contacts</h2>
    //   {isLoading && !error && <b>Request in progress...</b>}

    //   <Filter />
    //   <ContactList />

    //   {error && <p>Error, could not load.</p>}
    // </div>
  );
};
