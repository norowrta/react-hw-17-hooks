import { useContext } from "react";
import { ContactsContext } from "../ContactsContext";

export default function ContactList() {
  const { filteredContacts, deleteContact } = useContext(ContactsContext);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
