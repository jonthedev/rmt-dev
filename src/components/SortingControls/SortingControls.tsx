import { SortBy } from "../../lib/types"
import styles from "./SortingControls.module.css"

type SortingControlsProps = {
  sortBy: SortBy
  handleChangeSortBy: (newSortBy: SortBy) => void
}

export default function SortingControls({
  sortBy,
  handleChangeSortBy
}: SortingControlsProps) {
  return (
    <section className={styles.sorting}>
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={() => handleChangeSortBy("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => handleChangeSortBy("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  )
}

type SortingButtonProps = {
  children: React.ReactNode
  onClick: () => void
  isActive: boolean
}

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles["sorting__button"]} ${
        isActive ? `${styles["sorting__button--active"]}` : ""
      }`}
    >
      {children}
    </button>
  )
}
