import { Helmet } from 'react-helmet';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <div
        style={{
          padding: '20px 16px',
          backgroundColor: 'var(--light-color)',
        }}
      >
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
export default Contacts;
