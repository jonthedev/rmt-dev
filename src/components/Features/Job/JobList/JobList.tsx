import { useActiveId } from "../../../../lib/hooks"
import { type JobItem } from "../../../../lib/types"
import Spinner from "../../../Spinner/Spinner"
import JobListItem from "../JobListItem/JobListItem"
import styles from "./JobList.module.css"

type JobListProps = {
  jobItems: JobItem[]
  isLoading: boolean
}

export function JobList({ jobItems, isLoading }: JobListProps) {
  const activeId = useActiveId()

  return (
    <ul className={styles["job-list"]}>
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map(jobItem => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  )
}

export default JobList
