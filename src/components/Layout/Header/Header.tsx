import styles from "./Header.module.css"

export default function Header({ children }: { children: React.ReactNode }) {
  return <header className={styles.header}>{children}</header>
}

export const HeaderTop = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["header__top"]}>{children}</div>
}
