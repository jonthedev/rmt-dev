import JobList from "../../Job/JobList/JobList"
import styles from "./BookmarksPopover.module.css"
import { useBookmarksContext } from "../../../../lib/hooks"
import { forwardRef } from "react"
import { createPortal } from "react-dom"

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext()
  return createPortal(
    <div ref={ref} className={styles["bookmarks-popover"]}>
      <JobList isLoading={isLoading} jobItems={bookmarkedJobItems} />
    </div>,
    document.body
  )
})

export default BookmarksPopover
