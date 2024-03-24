import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import styles from "./PaginationControls.module.css"

type PaginationControlsProps = {
  onClick: (direction: "next" | "previous") => void
  currentPage: number
}

export default function Pagination({
  onClick,
  currentPage
}: PaginationControlsProps) {
  return (
    <section className={styles.pagination}>
      <button
        className={styles["pagination__button"]}
        onClick={() => onClick("previous")}
      >
        <ArrowLeftIcon />
        Page {currentPage - 1}
      </button>
      <button
        className={styles["pagination__button"]}
        onClick={() => onClick("next")}
      >
        Page {currentPage + 1}
        <ArrowRightIcon />
      </button>
    </section>
  )
}
