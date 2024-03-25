import styles from "./SortingControls.module.css"

export default function SortingControls({ sortBy, onClick }) {
  return (
    <section className={styles.sorting}>
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <button
        onClick={() => onClick("relevant")}
        className={`${styles["sorting__button"]} sorting__button--relevant ${
          sortBy === "relevant" ? `${styles["sorting__button--active"]}` : ""
        }`}
      >
        Relevant
      </button>

      <button
        onClick={() => onClick("recent")}
        className={`${styles["sorting__button"]} sorting__button--recent ${
          sortBy === "recent" ? `${styles["sorting__button--active"]}` : ""
        }`}
      >
        Recent
      </button>
    </section>
  )
}
