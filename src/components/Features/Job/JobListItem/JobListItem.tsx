import BookmarkIcon from "../../Bookmark/BookmarkIcon/BookmarkIcon"
import styles from "./JobListItem.module.css"

export default function JobListItem() {
  return (
    <li className={styles["job-item"]}>
      <a className={styles["job-item__link"]}>
        <div className={styles["job-item__badge"]}>9T</div>

        <div className={styles["job-item__middle"]}>
          <h3 className="third-heading">Front End React Engineer</h3>
          <p className={styles["job-item__company"]}>9th Tech</p>
        </div>

        <div className={styles["job-item__right"]}>
          <BookmarkIcon />
          <time className={styles["job-item__time"]}>2d</time>
        </div>
      </a>
    </li>
  )
}
