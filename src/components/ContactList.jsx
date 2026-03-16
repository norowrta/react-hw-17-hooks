export default function ContactList({ onDelete, filteredContacts }) {
  return (
    <ul className="contact-list">
      {filteredContacts.map((contact) => (
        <li key={contact.id} className="contact-item">
          <div className="contact-info">
            <span className="contact-name">{contact.name}:</span>
            <span className="contact-number">{contact.number}</span>
          </div>
          <button
            className="delete-button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
