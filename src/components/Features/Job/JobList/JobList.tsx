import JobListItem from "../JobListItem/JobListItem"
import styles from "./JobList.module.css"

export function JobList({ jobItems }) {
  return (
    <ul className={styles["job-list"]}>
      {jobItems.map(jobItem => (
        <JobListItem jobItem={jobItem} />
      ))}
    </ul>
  )
}

export default JobList
