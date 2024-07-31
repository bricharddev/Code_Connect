"use client";
import { useState } from "react";
import { SearchIcon } from "../SearchIcon";
import styles from "./searchInput.module.css";

const SearchInput = () => {
  const [focus, setFocus] = useState(false);

  return (
    <form className={styles.container} action="/">
    <div
      className={styles.input_container}
      style={{ border: focus ? "1px solid #81FE88" : "none" }}
    >
      <SearchIcon />
      <input
        className={styles.search_input}
        type="text"
        name="q"
        placeholder="Buscar post"
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(false)}
      />
    </div>
      <button type="submit" className={styles.search_btn}>Buscar</button>
    </form>
  );
};

export default SearchInput;
