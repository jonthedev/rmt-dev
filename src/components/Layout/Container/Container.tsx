import JobItemContent from "../../Features/Job/JobItemContent/JobItemContent"
import Sidebar from "../Sidebar/Sidebar"
import styles from "./Container.module.css"

export default function Container() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <JobItemContent />
    </div>
  )
}
