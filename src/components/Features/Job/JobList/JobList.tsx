import { type JobItem } from "../../../../lib/types"
import Spinner from "../../../Spinner/Spinner"
import JobListItem from "../JobListItem/JobListItem"
import styles from "./JobList.module.css"

type JobListProps = {
  jobItems: JobItem[]
  isLoading: boolean
}

export function JobList({ jobItems, isLoading }: JobListProps) {
  return (
    <ul className={styles["job-list"]}>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map(jobItem => (
          <JobListItem key={jobItem.id} jobItem={jobItem} />
        ))}
    </ul>
  )
}

export default JobList
