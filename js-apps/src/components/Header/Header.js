import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#">Aplicaciones</a>
          </li>
          <li>
            <a href="#">Aprende</a>
          </li>
        </ul>
        <button className={styles.loginButton}>Login</button>
      </nav>
    </header>
  );
}