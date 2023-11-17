import React, { useState } from 'react';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { ContactList } from 'components/ContactList/ContactList';
import css from './Phonebook.module.css';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactInput onAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};
