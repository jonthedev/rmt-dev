import styles from "./SearchForm.module.css"

type SearchFormProps = {
  searchText: string
  setSearchText: (searchText: string) => void
}

export default function SearchForm({
  searchText,
  setSearchText
}: SearchFormProps) {
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
