import styles from "./SortingControls.module.css"

export default function Sorting() {
  return (
    <section className={styles.sorting}>
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        className={`${styles["sorting__button"]} sorting__button--relevant`}
      >
        Relevant
      </button>

      <button
        className={`${styles["sorting__button"]} sorting__button--recent`}
      >
        Recent
      </button>
    </section>
  )
}
