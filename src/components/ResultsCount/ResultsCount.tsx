import styles from "./ResultsCount.module.css"

type ResultsCountProps = {
  totalNumberOfResults: number
}

export default function ResultsCount({
  totalNumberOfResults
}: ResultsCountProps) {
  return (
    <p className={styles.count}>
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  )
}
