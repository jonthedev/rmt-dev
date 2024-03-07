import styles from "./SearchForm.module.css"

export default function SearchForm({ searchText, setSearchText }) {
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
        onChange={e => {
          setSearchText(e.target.value)
        }}
        value={searchText}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  )
}
