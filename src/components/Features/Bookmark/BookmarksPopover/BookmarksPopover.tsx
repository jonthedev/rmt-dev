import JobList from "../../Job/JobList/JobList"
import styles from "./BookmarksPopover.module.css"
import { useBookmarksContext } from "../../../../lib/hooks"
import { forwardRef } from "react"

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext()
  return (
    <div ref={ref} className={styles["bookmarks-popover"]}>
      <JobList isLoading={isLoading} jobItems={bookmarkedJobItems} />
    </div>
  )
})

export default BookmarksPopover
