import { useState, useEffect, useRef } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { ContactsContext } from "./ContactsContext";

const defaultContacts = [
  { id: "id-1", name: "Walter White", number: "505-164-3287" },
  { id: "id-2", name: "Jesse Pinkman", number: "505-148-3369" },
  { id: "id-3", name: "Saul Goodman", number: "505-503-4455" },
  { id: "id-4", name: "Mike Ehrmantraut", number: "505-242-7700" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return defaultContacts;
  });

  const [filter, setFilter] = useState("");

  const appContainerRef = useRef(null);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ContactsContext.Provider value={{ contacts, addContact, deleteContact, filter, setFilter, filteredContacts }}>
      <div className="app-container" ref={appContainerRef}>
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </ContactsContext.Provider>
  );
}
