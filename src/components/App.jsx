import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { MainWrapper, HeaderPhone, HeaderContacts } from './App.styled';
import ContactForm from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({
        contacts: parseContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DidMount Update');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addFormContact = data => {
    const newContact = { id: nanoid(), ...data };
    const newName = newContact.name;

    const proofName = Object.values(this.state.contacts).map(contact =>
      contact.name.toLowerCase()
    );
    if (proofName.includes(newName)) {
      return alert(`${newName} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <MainWrapper>
        <HeaderPhone>Phonebook</HeaderPhone>
        <ContactForm onSubmit={this.addFormContact} />

        <HeaderContacts>Contacts</HeaderContacts>
        <Filter filter={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </MainWrapper>
    );
  }
}

export default App;
