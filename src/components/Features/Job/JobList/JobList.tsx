import Spinner from "../../../Spinner/Spinner"
import JobListItem from "../JobListItem/JobListItem"
import styles from "./JobList.module.css"

export function JobList({ jobItems, isLoading }) {
  return (
    <ul className={styles["job-list"]}>
      {isLoading && <Spinner />}
      {!isLoading && jobItems.map(jobItem => <JobListItem jobItem={jobItem} />)}
    </ul>
  )
}

export default JobList
