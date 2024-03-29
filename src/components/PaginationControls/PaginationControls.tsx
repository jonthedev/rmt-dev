import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import styles from "./PaginationControls.module.css"
import { useJobItemsContext } from "../../lib/hooks"

export default function Pagination() {
  const { currentPage, handleChangePage, totalNumberOfPages } =
    useJobItemsContext()
  return (
    <section className={styles.pagination}>
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => handleChangePage("previous")}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => handleChangePage("next")}
        />
      )}
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
      onClick={e => {
        onClick()
        e.currentTarget.blur()
      }}
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
