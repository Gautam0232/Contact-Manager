import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './Header.js';
import AddContact from './AddContact.js';
import ContactList from './ContactList';
import React,{ useEffect, useState } from 'react';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;