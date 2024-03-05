import JobList from "../../Features/Job/JobList/JobList"
import Pagination from "../../PaginationControls/PaginationControls"
import ResultsCount from "../../ResultsCount/ResultsCount"
import Sorting from "../../SortingControls/SortingControls"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__top"]}>
        <ResultsCount />
        <Sorting />
      </div>

      <JobList />
      <Pagination />
    </div>
  )
}
