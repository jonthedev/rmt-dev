import { useJobItemsContext } from "../../lib/hooks"
import styles from "./SortingControls.module.css"

export default function SortingControls() {
  const { handleChangeSortBy, sortBy } = useJobItemsContext()
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
