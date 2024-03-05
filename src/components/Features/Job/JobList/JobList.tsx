import JobListItem from "../JobListItem/JobListItem"
import styles from "./JobList.module.css"

export function JobList() {
  return (
    <ul className={styles["job-list"]}>
      <JobListItem />
    </ul>
  )
}

export default JobList
