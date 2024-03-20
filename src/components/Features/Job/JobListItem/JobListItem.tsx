import { JobItem } from "../../../../lib/types"
import BookmarkIcon from "../../Bookmark/BookmarkIcon/BookmarkIcon"
import styles from "./JobListItem.module.css"

type JobListItemProps = {
  jobItem: JobItem
  isActive: boolean
}

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  return (
    <li
      className={`${styles["job-item"]} ${
        isActive ? styles["job-item--active"] : ""
      }`}
    >
      <a className={styles["job-item__link"]} href={`#${jobItem.id}`}>
        <div className={styles["job-item__badge"]}>{jobItem.badgeLetters}</div>

        <div className={styles["job-item__middle"]}>
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className={styles["job-item__company"]}>{jobItem.company}</p>
        </div>

        <div className={styles["job-item__right"]}>
          <BookmarkIcon />
          <time className={styles["job-item__time"]}>{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  )
}
