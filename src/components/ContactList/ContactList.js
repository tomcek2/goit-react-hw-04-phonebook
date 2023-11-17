import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
