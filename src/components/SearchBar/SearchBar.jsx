import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      iziToast.error({
        title: "Error",
        message: "Please enter something to search",
        position: "center",
      });
      return;
    }
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <button className={styles.searchBtn} type="submit">
        <FaSearch />
      </button>
      <input
        className={styles.inputStyle}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;

