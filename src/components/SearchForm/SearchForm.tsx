import { useSearchTextContext } from "../../lib/hooks"
import styles from "./SearchForm.module.css"

export default function SearchForm() {
  const { searchText, handleChangeSearchText } = useSearchTextContext()
  return (
    <form
      action="#"
      className={styles.search}
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        onChange={e => handleChangeSearchText(e.target.value)}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  )
}
