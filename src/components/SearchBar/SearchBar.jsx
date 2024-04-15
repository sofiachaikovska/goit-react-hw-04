import css from "./SearchBar.module.css";
import { Toaster, toast } from "react-hot-toast";

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.trim();
    if (!searchTerm) {
      toast.error("Enter text to search for images!");
      return;
    }
    onSetSearchQuery(searchTerm);
  };

  return (
    <header className={css.header}>
      <Toaster />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchBtn} type="submit">
          🔍
        </button>
        <input
          className={css.headerInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
    </header>
  );
};

export default SearchBar;
