import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const defaultContacts = [
  { id: "id-1", name: "Walter White", number: "505-164-3287" },
  { id: "id-2", name: "Jesse Pinkman", number: "505-148-3369" },
  { id: "id-3", name: "Saul Goodman", number: "505-503-4455" },
  { id: "id-4", name: "Mike Ehrmantraut", number: "505-242-7700" },
];

export default function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState("");

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
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        onDelete={deleteContact}
        filteredContacts={filteredContacts}
      />
    </div>
  );
}
