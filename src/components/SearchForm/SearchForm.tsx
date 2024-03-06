import { useEffect, useState } from "react"
import styles from "./SearchForm.module.css"
import { BASE_API_URL } from "../../lib/consts"

export default function SearchForm() {
  const [searchText, setSearchText] = useState("")
  const [jobItems, setJobItems] = useState([])

  useEffect(() => {
    if (!searchText) return

    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`)
      const data = await response.json()
      setJobItems(data.jobItems)
    }
    fetchData()
  }, [searchText])

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
