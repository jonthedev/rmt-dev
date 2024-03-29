import { useJobItemsContext } from "../../lib/hooks"
import styles from "./ResultsCount.module.css"

export default function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext()
  return (
    <p className={styles.count}>
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  )
}
