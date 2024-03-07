import BookmarksButton from "../../Features/Bookmark/BookmarksButton/BookmarksButton"
import { Logo } from "../../SVGR/Logo/Logo"
import SearchForm from "../../SearchForm/SearchForm"
import styles from "./Header.module.css"

export default function Header({ searchText, setSearchText }) {
  return (
    <header className={styles.header}>
      <div className={styles["header__top"]}>
        <Logo />
        <BookmarksButton />
      </div>
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
    </header>
  )
}
