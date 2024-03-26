import { BookmarkFilledIcon } from "@radix-ui/react-icons"
import styles from "./BookmarkIcon.module.css"
import { useContext } from "react"
import { BookmarksContext } from "../../../../context/BookmarksContextProvider"

type BookmarkIconProps = {
  id: number
}

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkIds, handleToggleBookmark } = useContext(BookmarksContext)

  return (
    <button
      className={styles["bookmark-btn"]}
      onClick={e => {
        handleToggleBookmark(id)
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <BookmarkFilledIcon
        className={`${bookmarkIds.includes(id) ? styles["filled"] : ""}`}
      />
    </button>
  )
}
