export default function Filter({ filter, setFilter }) {
  return (
    <div className="form-group filter-group">
      <label className="form-label" htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className="form-input"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
