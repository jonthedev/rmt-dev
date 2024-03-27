import { BookmarkFilledIcon } from "@radix-ui/react-icons"
import styles from "./BookmarkIcon.module.css"
import { useBookmarksContext } from "../../../../lib/hooks"

type BookmarkIconProps = {
  id: number
}

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkIds, handleToggleBookmark } = useBookmarksContext()

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
