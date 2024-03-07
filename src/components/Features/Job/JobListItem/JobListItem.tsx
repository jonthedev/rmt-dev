import BookmarkIcon from "../../Bookmark/BookmarkIcon/BookmarkIcon"
import styles from "./JobListItem.module.css"

type JobItem = {
  id: number
  badgeLetters: string
  title: string
  company: string
  date: string
  relevanceScore: number
  daysAgo: number
}

type JobListItemProps = {
  jobItem: JobItem
}

export default function JobListItem({ jobItem }: JobListItemProps) {
  return (
    <li className={styles["job-item"]}>
      <a className={styles["job-item__link"]}>
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
