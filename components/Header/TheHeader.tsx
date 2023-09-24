import Link from "next/link";
import styles from "./Header.module.scss";

const TheHeader = () => {
  return (
    <header className={styles.Header}>
      <span>
        {" "}
        <Link href="/" className={styles.Link}>
          Home
        </Link>
      </span>
      <span>
        <Link href="/" className={styles.Link}>
          Кино
        </Link>
      </span>
      <span>
        <Link href="/" className={styles.Link}>
          Сериалы
        </Link>
      </span>
    </header>
  );
};

export { TheHeader };
