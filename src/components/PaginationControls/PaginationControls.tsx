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
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => onClick("previous")}
        />
      )}
      <PaginationButton
        direction="next"
        currentPage={currentPage}
        onClick={() => onClick("next")}
      />
    </section>
  )
}

type PaginationButtonProps = {
  direction: "previous" | "next"
  currentPage: number
  onClick: () => void
}

const PaginationButton = ({
  direction,
  currentPage,
  onClick
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[`pagination__button`]} ${
        styles[`pagination__button--${direction}`]
      }`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon /> Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1} <ArrowRightIcon />
        </>
      )}
    </button>
  )
}
