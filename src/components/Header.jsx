import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ setSearchValue }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to={"/"}>Blog</Link>
      </h1>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Faça sua pesquisa:"
        />
      </div>
    </header>
  );
}
