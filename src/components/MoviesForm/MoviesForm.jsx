import css from './MoviesForm.module.css';

export default function MoviesForm({ filter, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filter);
  };

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <input
        id="movieSearch"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter movie title"
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </div>
  );
}