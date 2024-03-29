import { TriangleDownIcon } from "@radix-ui/react-icons"
import styles from "./BookmarksButton.module.css"
import BookmarksPopover from "../BookmarksPopover/BookmarksPopover"
import { useEffect, useRef, useState } from "react"

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const popOverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !buttonRef.current?.contains(e.target) &&
        !popOverRef.current?.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <section>
      <button
        ref={buttonRef}
        className={styles["bookmarks-btn"]}
        onClick={() => setIsOpen(prev => !prev)}
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={popOverRef} />}
    </section>
  )
}
