import { TriangleDownIcon } from "@radix-ui/react-icons"
import styles from "./BookmarksButton.module.css"
import BookmarksPopover from "../BookmarksPopover/BookmarksPopover"
import { useState } from "react"

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section>
      <button
        className={styles["bookmarks-btn"]}
        onClick={() => setIsOpen(prev => !prev)}
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover />}
    </section>
  )
}
