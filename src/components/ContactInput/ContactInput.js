import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactInput.module.css';

export const ContactInput = ({ onAddContact }) => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: name,
    };

    onAddContact(newContact);

    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.newContact}>
        Name:
        <input
          className={css.newContactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
