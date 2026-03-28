import { useContext } from "react";
import { ContactsContext } from "../ContactsContext";

export default function Filter() {
  const { filter, setFilter } = useContext(ContactsContext);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search contacts..."
    />
  );
}
