import React, { Component } from 'react';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: '',
      name: '',
      number: '',
      error: null,
    };
  }

  initialContactsList = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  componentDidMount() {
    console.log('Component is mounted');
    const initialContacts =
      JSON.parse(localStorage.getItem('contacts')) || this.initialContactsList;
    this.setState({ contacts: initialContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component is updated');
    if (
      prevState.contacts !== this.state.contacts ||
      prevState.filter !== this.state.filter
    ) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    this.setState({ error });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.contacts !== this.state.contacts ||
      nextState.filter !== this.state.filter ||
      nextState.name !== this.state.name ||
      nextState.number !== this.state.number ||
      nextState.error !== this.state.error
    );
  }

  handleAddContact = newContact => {
    try {
      if (
        this.state.contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        throw new Error(`${newContact.name} is already in contacts.`);
      }

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    } catch (error) {
      this.setState({ error });
    }
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    if (this.state.error) {
      return <h2>Something went wrong: {this.state.error.message}</h2>;
    }

    return (
      <div>
        <h1>Contact Book</h1>
        <ContactInput
          onAddContact={this.handleAddContact}
          name={this.state.name}
          number={this.state.number}
          setName={name => this.setState({ name })}
          setNumber={number => this.setState({ number })}
        />
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
