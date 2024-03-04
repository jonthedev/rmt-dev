import styles from "./SearchForm.module.css"

export default function SearchForm() {
  return (
    <form action="#" className={styles.search}>
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  )
}
