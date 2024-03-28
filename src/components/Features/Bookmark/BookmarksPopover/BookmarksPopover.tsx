import JobList from "../../Job/JobList/JobList"
import styles from "./BookmarksPopover.module.css"
import { useBookmarksContext } from "../../../../lib/hooks"

export default function BookmarksPopover() {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext()
  return (
    <div className={styles["bookmarks-popover"]}>
      <JobList isLoading={isLoading} jobItems={bookmarkedJobItems} />
    </div>
  )
}
